import { CancelRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

import { useAction } from "@/hooks/useAction";

interface Props {
    distance: number;
    time: number;
}

const RouteInfoSection = ({ distance, time }: Props) => {
    const { endRoute, hideSection } = useAction();
    console.log(distance, time);
    console.log(1);
    const cancelRoute = () => {
        endRoute();
        hideSection();
    };

    return (
        <div>
            Time: {time} Distance: {distance}
            <Button onClick={cancelRoute}>
                <CancelRounded />
            </Button>
        </div>
    );
};

export default RouteInfoSection;
