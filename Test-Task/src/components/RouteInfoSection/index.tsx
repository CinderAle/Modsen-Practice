import { useAction } from "@/hooks/useAction";
import {
    DistanceContainer,
    RouteDataContainer,
    RouteInfoContainer,
    TimeContainer,
} from "./styles/containers";
import { ValueHeading, ValueLabel } from "./styles/text";
import { CancelRouteButton, CancelRouteIcon } from "./styles/button";
import { metersToKilometers, secondsToTime } from "@/utils/transformMetrics";

interface Props {
    distance: number;
    time: number;
}

const RouteInfoSection = ({ distance, time }: Props) => {
    const { endRoute, hideSection } = useAction();
    const cancelRoute = () => {
        endRoute();
        hideSection();
    };

    return (
        <RouteInfoContainer>
            <RouteDataContainer>
                <DistanceContainer>
                    <ValueHeading>
                        {metersToKilometers(distance)} km
                    </ValueHeading>
                    <ValueLabel>дистанция</ValueLabel>
                </DistanceContainer>
                <TimeContainer>
                    <ValueHeading>{secondsToTime(time)}</ValueHeading>
                    <ValueLabel>примерное время</ValueLabel>
                </TimeContainer>
            </RouteDataContainer>
            <CancelRouteButton onClick={cancelRoute}>
                <CancelRouteIcon />
            </CancelRouteButton>
        </RouteInfoContainer>
    );
};

export default RouteInfoSection;
