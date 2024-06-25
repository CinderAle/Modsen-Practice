import { MarkerF } from "@react-google-maps/api";
import { LatLng, LatLngLiteral } from "google-maps-react-markers";

interface Props {
    coordinates: LatLngLiteral | LatLng;
}

const StyledPlaceMarker = ({ coordinates }: Props) => {
    return (
        <MarkerF
            position={coordinates}
            icon={{
                url: "/places/car.svg",
                scaledSize: new google.maps.Size(30, 30),
                anchor: new google.maps.Point(15, 15),
            }}
        />
    );
};

export default StyledPlaceMarker;
