import {
    LocateButton,
    LocateIcon,
    ZoomInButton,
    ZoomInIcon,
    ZoomOutButton,
    ZoomOutIcon,
} from "./styles/buttons";
import { ControlsContainer, ZoomControls } from "./styles/container";

interface Props {
    zoomIn: () => void;
    zoomOut: () => void;
    center: () => void;
}

const StyledMapControls = ({ zoomIn, zoomOut, center }: Props) => {
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

export default StyledMapControls;
