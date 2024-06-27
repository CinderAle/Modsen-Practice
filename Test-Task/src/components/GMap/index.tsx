import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { defaultCenter, getLocation } from "@/utils/geolocation.ts";
import Loader from "../Loader";
import { getNearbyPlaces } from "@/utils/getPlaces.ts";
import { useTypedSelector } from "@/hooks/useTypedSelector.ts";
import StyledMap from "./StyledMap.tsx";
import StyledSelfMarker from "./StyledSelfMarker.tsx";
import StyledSearchCircle from "./StyledSearchCircle.tsx";
import StyledSmallerCircle from "./StyledSmallerCircle.tsx";
import PlaceMarker from "../PlaceMarker/index.tsx";

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
        </StyledMap>
    );
};

export default Map;
