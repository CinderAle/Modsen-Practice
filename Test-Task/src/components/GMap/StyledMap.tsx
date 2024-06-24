import { Box } from "@mui/material";
import { GoogleMap } from "@react-google-maps/api";
import { ReactNode } from "react";
import { ZOOM_CONSTANTS } from "@/constants/zoomConstants.ts";
import styles from "./styles.json";

interface Props {
  children: ReactNode;
  coordinates: { lat: number; lng: number };
  zoom: number;
}

const StyledMap = ({ children, coordinates, zoom }: Props) => {
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
        {children}
      </GoogleMap>
    </Box>
  );
};

export default StyledMap;
