import { ReactNode } from "react";

import { useAction } from "@/hooks/useAction";

import StyledHideSectionButton from "./StyledHideSectionButton";
import StyledSectionContainer from "./StyledSectionContainer";
import StyledSectionContentBox from "./StyledSectionContentBox";

interface Props {
    children?: ReactNode;
}
const Section = ({ children }: Props) => {
    const { hideSection } = useAction();
    return (
        <StyledSectionContainer>
            <StyledSectionContentBox>{children}</StyledSectionContentBox>
            <StyledHideSectionButton hideSection={hideSection} />
        </StyledSectionContainer>
    );
};

export default Section;
