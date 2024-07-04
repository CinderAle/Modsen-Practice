import { useAction } from "@/hooks/useAction";
import { ControlsContainer, ZoomControls } from "./styles/container";
import {
    LocateButton,
    LocateIcon,
    ZoomInButton,
    ZoomInIcon,
    ZoomOutButton,
    ZoomOutIcon,
} from "./styles/buttons";

const MapControls = () => {
    const { zoomIn, zoomOut } = useAction();

    const center = () => {
        console.log("center");
    };

    return (
        <ControlsContainer>
            <LocateButton onClick={center}>
                <LocateIcon />
            </LocateButton>
            <ZoomControls>
                <ZoomInButton onClick={zoomIn}>
                    <ZoomInIcon />
                </ZoomInButton>
                <ZoomOutButton onClick={zoomOut}>
                    <ZoomOutIcon />
                </ZoomOutButton>
            </ZoomControls>
        </ControlsContainer>
    );
};

export default MapControls;
