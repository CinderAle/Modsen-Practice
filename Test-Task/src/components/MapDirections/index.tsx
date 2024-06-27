import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { LatLng, LatLngLiteral } from "google-maps-react-markers";
import { useEffect, useState } from "react";

interface Props {
    from: LatLng | LatLngLiteral;
    to: LatLng | LatLngLiteral;
}

const ROUTES_LIBRARY = "routes";

const MapDirections = ({ from, to }: Props) => {
    const map = useMap();
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
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [map, routesLibrary]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer) return;
        directionsService
            .route({
                origin: from,
                destination: to,
                travelMode: google.maps.TravelMode.WALKING,
            })
            .then((response) => {
                directionsRenderer.setDirections(response);
            });
    }, [directionsService, directionsRenderer]);

    return null;
};

export default MapDirections;
