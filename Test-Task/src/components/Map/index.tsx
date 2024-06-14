import { Box } from "@mui/material";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { defaultCenter, getLocation } from "../../utils/Geolocation.ts";
import Loader from "../Loader";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  const [coordinates, setCoordinates] = useState(defaultCenter);
  useEffect(() => {
    getLocation()
      .then((currentCoordinates) => {
        setCoordinates(currentCoordinates);
      })
      .catch((location) => {
        setCoordinates(location);
      });
  }, []);
  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <Box position={"absolute"} left={0} top={0} width={"100%"} height={"100%"}>
      <GoogleMap
        center={coordinates}
        zoom={17}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </Box>
  );
};

export default Map;
