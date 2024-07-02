import { useAction } from "@/hooks/useAction";

import StyledMapControls from "./StyledMapControls";

const MapControls = () => {
    const { zoomIn, zoomOut } = useAction();

    const center = () => {
        console.log("center");
    };

    return (
        <StyledMapControls zoomIn={zoomIn} zoomOut={zoomOut} center={center} />
    );
};

export default MapControls;
