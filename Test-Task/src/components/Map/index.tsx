import { Box, rgbToHex } from "@mui/material";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { defaultCenter, getLocation } from "../../utils/Geolocation.ts";
import Loader from "../Loader";
import styles from "./styles.json";
import { getNearbyPlaces } from "../../utils/GetPlaces.ts";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
//const MAP_STYLES = require("./styles.json");
const DEFAULT_ZOOM = 18;
const MARKER_ICON = "/marker.svg";
const TEST_RADIUS = 100;
const MARKER_CIRCLE_RADIUS = 10;
const CIRCLE_RGB_COLOR = "rgb(94,123,199)";
const CIRCLE_STROKE_WIDTH = 2;
const MARKER_CIRCLE_OPACITY = 0.2;
const CIRCLE_OPACITY = 0.1;

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [coordinates, setCoordinates] = useState(defaultCenter);
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
  console.log(places.length);
  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <Box position={"absolute"} left={0} top={0} width={"100%"} height={"100%"}>
      <GoogleMap
        center={coordinates}
        zoom={DEFAULT_ZOOM}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: false,
          styles: styles,
          minZoom: 17,
          maxZoom: 20,
        }}
      >
        <MarkerF
          position={coordinates}
          icon={{
            url: MARKER_ICON,
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
          radius={TEST_RADIUS}
          center={coordinates}
          options={{
            strokeColor: rgbToHex(CIRCLE_RGB_COLOR),
            fillColor: rgbToHex(CIRCLE_RGB_COLOR),
            strokePosition: google.maps.StrokePosition.INSIDE,
            strokeWeight: CIRCLE_STROKE_WIDTH,
            fillOpacity: CIRCLE_OPACITY,
          }}
        />
        <CircleF
          radius={MARKER_CIRCLE_RADIUS}
          center={coordinates}
          options={{
            strokeWeight: 0,
            fillColor: rgbToHex(CIRCLE_RGB_COLOR),
            fillOpacity: MARKER_CIRCLE_OPACITY,
          }}
        />
      </GoogleMap>
    </Box>
  );
};

export default Map;

// /* Ellipse 2 */

// position: absolute;
// width: 98px;
// height: 98px;
// left: calc(50% - 98px/2 - 14px);
// top: calc(50% - 98px/2 + 5px);

// background: rgba(94, 123, 199, 0.2);

/*

box-sizing: border-box;

position: absolute;
width: 900px;
height: 900px;
left: calc(50% - 900px/2 - 14px);
top: calc(50% - 900px/2 + 5px);

background: rgba(94, 123, 199, 0.1);
border: 3px dashed rgba(94, 123, 199, 0.2);

*/
