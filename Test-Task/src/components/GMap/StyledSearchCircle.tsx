import { CircleF } from "@react-google-maps/api";
import { LatLngLiteral } from "google-maps-react-markers";
import { CIRCLE_RGB_COLOR } from "./constants";

interface Props {
    center: LatLngLiteral;
    radius?: number;
}

const OPACITY = 0.1;
const STROKE_WIDTH = 2;

const StyledSearchCircle = ({ center, radius }: Props) => {
    return (
        <CircleF
            center={center}
            radius={radius}
            options={{
                strokeColor: CIRCLE_RGB_COLOR,
                fillColor: CIRCLE_RGB_COLOR,
                strokePosition: google.maps.StrokePosition.INSIDE,
                strokeWeight: STROKE_WIDTH,
                fillOpacity: OPACITY,
            }}
        />
    );
};

export default StyledSearchCircle;
