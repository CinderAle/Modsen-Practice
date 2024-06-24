import { Box, rgbToHex } from "@mui/material";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { defaultCenter, getLocation } from "../../utils/geolocation.ts";
import Loader from "../Loader";
import styles from "./styles.json";
import { getNearbyPlaces } from "../../utils/getPlaces.ts";
import { useTypedSelector } from "@/hooks/useTypedSelector.ts";
import { constants } from "./constants.ts";
import { ZOOM_CONSTANTS } from "@/constants/zoomConstants.ts";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: constants.API_KEY,
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
        getNearbyPlaces(coords, constants.TEST_RADIUS).then((response) => {
          setPlaces([...(response ?? [])]);
        });
        setCoordinates(coords);
      });
  }, []);
  console.log(places.length);
  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <Box position={"absolute"} left={0} top={0} width={"100%"} height={"100%"}>
      <GoogleMap
        center={coordinates}
        zoom={zoom}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: false,
          styles: styles,
          maxZoom: ZOOM_CONSTANTS.MAX_ZOOM,
          minZoom: ZOOM_CONSTANTS.MIN_ZOOM,
        }}
      >
        <MarkerF
          position={coordinates}
          icon={{
            url: constants.MARKER_ICON,
            scaledSize: new google.maps.Size(30, 30),
            anchor: new google.maps.Point(15, 15),
          }}
        />
        {places.map((place, id) => {
          if (
            place.geometry != undefined &&
            place.geometry.location != undefined
          ) {
            return (
              <MarkerF
                key={id}
                position={place.geometry.location}
                icon={{
                  url: "/places/car.svg",
                  scaledSize: new google.maps.Size(30, 30),
                  anchor: new google.maps.Point(15, 15),
                }}
              />
            );
          }
        })}
        <CircleF
          radius={constants.TEST_RADIUS}
          center={coordinates}
          options={{
            strokeColor: rgbToHex(constants.CIRCLE_RGB_COLOR),
            fillColor: rgbToHex(constants.CIRCLE_RGB_COLOR),
            strokePosition: google.maps.StrokePosition.INSIDE,
            strokeWeight: constants.CIRCLE_STROKE_WIDTH,
            fillOpacity: constants.CIRCLE_OPACITY,
          }}
        />
        <CircleF
          radius={constants.MARKER_CIRCLE_RADIUS}
          center={coordinates}
          options={{
            strokeWeight: 0,
            fillColor: rgbToHex(constants.CIRCLE_RGB_COLOR),
            fillOpacity: constants.MARKER_CIRCLE_OPACITY,
          }}
        />
      </GoogleMap>
    </Box>
  );
};

export default Map;
