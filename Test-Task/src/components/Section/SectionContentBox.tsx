import { ReactNode } from "react";

import { AddressInput, SectionContainer } from "./styles/container";

interface Props {
    children: ReactNode;
}

const SectionContentBox = ({ children }: Props) => {
    return (
        <SectionContainer>
            <AddressInput />
            {children}
        </SectionContainer>
    );
};

export default SectionContentBox;
