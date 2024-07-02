import { useJsApiLoader } from "@react-google-maps/api";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

import { useAction } from "@/hooks/useAction.ts";
import { useTypedSelector } from "@/hooks/useTypedSelector.ts";
import { Route } from "@/types/route.ts";
import { defaultCenter, getLocation } from "@/utils/geolocation.ts";
import { getNearbyPlaces } from "@/utils/getPlaces.ts";

import Loader from "../Loader";
import MapDirections from "../MapDirections/index.tsx";
import PlaceMarker from "../PlaceMarker/index.tsx";
import StyledMap from "./StyledMap.tsx";
import StyledSearchCircle from "./StyledSearchCircle.tsx";
import StyledSelfMarker from "./StyledSelfMarker.tsx";
import StyledSmallerCircle from "./StyledSmallerCircle.tsx";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY,
    });

    const [coordinates, setCoordinates] = useState(defaultCenter);
    const filters = useTypedSelector((state) => state.filter.filters);
    const zoom = useTypedSelector((state) => state.zoom.value);
    const radius = useTypedSelector((state) => state.filter.radius);
    const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
    const { setRoute } = useAction();
    const route = useTypedSelector((state) => state.route.route);

    useEffect(() => {
        let coords: { lat: number; lng: number };
        getLocation()
            .then((currentCoordinates) => {
                coords = currentCoordinates;
            })
            .catch((location) => {
                coords = location;
            })
            .finally(() => {
                if (JSON.stringify(route.from) !== JSON.stringify(route.to)) {
                    setRoute(new Route(coords, route.to));
                } else {
                    setRoute(new Route(coords, coords));
                }
                getNearbyPlaces(coords, radius, filters).then((response) => {
                    setPlaces([...(response ?? [])]);
                });
                setCoordinates(coords);
            });
    }, [filters, radius]);

    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <APIProvider apiKey={API_KEY}>
            <StyledMap coordinates={coordinates} zoom={zoom}>
                <StyledSelfMarker coordinates={coordinates} />
                {places.map((place, id) => {
                    if (
                        place.geometry != undefined &&
                        place.geometry.location != undefined
                    ) {
                        return <PlaceMarker key={id} place={place} />;
                    }
                })}
                <StyledSearchCircle center={coordinates} radius={radius} />
                <StyledSmallerCircle center={coordinates} />
                {places[0] !== undefined &&
                    places[0].geometry?.location !== undefined && (
                        <MapDirections />
                    )}
            </StyledMap>
        </APIProvider>
    );
};

export default Map;
