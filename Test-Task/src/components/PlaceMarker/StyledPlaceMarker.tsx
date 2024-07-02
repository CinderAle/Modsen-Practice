import { MarkerF } from "@react-google-maps/api";
import { LatLng, LatLngLiteral } from "google-maps-react-markers";

interface Props {
    coordinates: LatLngLiteral | LatLng;
    icon: string;
    onClick: () => void;
}

const StyledPlaceMarker = ({ coordinates, icon, onClick }: Props) => {
    return (
        <MarkerF
            position={coordinates}
            icon={{
                url: `/places/${icon}.svg`,
                scaledSize: new google.maps.Size(30, 30),
                anchor: new google.maps.Point(15, 15),
            }}
            onClick={onClick}
        />
    );
};

export default StyledPlaceMarker;
