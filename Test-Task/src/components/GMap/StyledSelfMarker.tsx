import { MarkerF } from "@react-google-maps/api";

interface Props {
  coordinates: google.maps.LatLngLiteral;
}

const MARKER_ICON = "/marker.svg";

const StyledSelfMarker = ({ coordinates }: Props) => {
  return (
    <MarkerF
      position={coordinates}
      icon={{
        url: MARKER_ICON,
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15),
      }}
    />
  );
};

export default StyledSelfMarker;
