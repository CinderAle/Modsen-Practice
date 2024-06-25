import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { defaultCenter, getLocation } from "../../utils/geolocation.ts";
import Loader from "../Loader";
import { getNearbyPlaces } from "../../utils/getPlaces.ts";
import { useTypedSelector } from "@/hooks/useTypedSelector.ts";
import StyledMap from "./StyledMap.tsx";
import StyledSelfMarker from "./StyledSelfMarker.tsx";
import StyledPlaceMarker from "./StyledPlaceMarker.tsx";
import StyledSearchCircle from "./StyledSearchCircle.tsx";
import StyledSmallerCircle from "./StyledSmallerCircle.tsx";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const TEST_RADIUS = 100;

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY,
    });

    const [coordinates, setCoordinates] = useState(defaultCenter);
    const zoom = useTypedSelector((state) => state.zoom.value);
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
                getNearbyPlaces(coords, TEST_RADIUS).then((response) => {
                    setPlaces([...(response ?? [])]);
                });
                setCoordinates(coords);
            });
    }, []);

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
                    return (
                        <StyledPlaceMarker
                            key={id}
                            coordinates={place.geometry.location}
                        />
                    );
                }
            })}
            <StyledSearchCircle center={coordinates} radius={TEST_RADIUS} />
            <StyledSmallerCircle center={coordinates} />
        </StyledMap>
    );
};

export default Map;
