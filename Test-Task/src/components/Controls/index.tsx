import { ReactNode } from "react";

import { ControlsContainer } from "./styles/container";

interface Props {
    children: ReactNode;
}

const Controls = ({ children }: Props) => {
    return <ControlsContainer>{children}</ControlsContainer>;
};

export default Controls;
