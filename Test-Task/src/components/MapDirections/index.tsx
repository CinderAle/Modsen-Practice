import { rgbToHex } from "@mui/material";
import { useGoogleMap } from "@react-google-maps/api";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SectionType } from "@/types/section";

const ROUTES_LIBRARY = "routes";

const MapDirections = () => {
    const route = useTypedSelector((state) => state.route.route);
    const section = useTypedSelector((state) => state.section.type);
    const { showRouteInfo, hideSection } = useAction();
    const map = useGoogleMap();
    const routesLibrary = useMapsLibrary(ROUTES_LIBRARY);
    const [directionsService, setDirectionsSerice] =
        useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] =
        useState<google.maps.DirectionsRenderer>();

    //For future possible use
    //const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>();

    useEffect(() => {
        if (!map || !routesLibrary) return;
        setDirectionsSerice(new routesLibrary.DirectionsService());
        setDirectionsRenderer(
            new routesLibrary.DirectionsRenderer({
                map,
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: rgbToHex("rgb(94,123,199)"),
                    strokeOpacity: 0.75,
                },
            }),
        );
    }, [map, routesLibrary, route]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer) return;

        if (JSON.stringify(route.from) === JSON.stringify(route.to)) {
            console.log(JSON.stringify(route.from), JSON.stringify(route.to));
            if (section === SectionType.Route) {
                hideSection();
            }
            directionsRenderer.setMap(null);
            return;
        }

        directionsService
            .route({
                origin: route.from,
                destination: route.to ?? { lat: 0, lng: 0 },
                travelMode: google.maps.TravelMode.WALKING,
            })
            .then((response) => {
                const distance = response.routes[0].legs[0].distance?.value ?? 0;
                const time = response.routes[0].legs[0].duration?.value ?? 0;
                showRouteInfo(distance, time);
                directionsRenderer.setDirections(response);
            });
    }, [directionsService, directionsRenderer, route]);

    return null;
};

export default MapDirections;
