import { CircleF } from "@react-google-maps/api";
import { LatLngLiteral } from "google-maps-react-markers";
import { CIRCLE_RGB_COLOR } from "./constants.ts";

interface Props {
    center: LatLngLiteral;
}

const RADIUS = 10;
const OPACITY = 0.2;

const StyledSmallerCircle = ({ center }: Props) => {
    return (
        <CircleF
            center={center}
            radius={RADIUS}
            options={{
                fillColor: CIRCLE_RGB_COLOR,
                strokeWeight: 0,
                fillOpacity: OPACITY,
            }}
        />
    );
};

export default StyledSmallerCircle;
