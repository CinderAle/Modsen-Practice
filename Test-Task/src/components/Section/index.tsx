import { ReactNode } from "react";

import { useAction } from "@/hooks/useAction";

import HideSectionButton from "./HideSectionButton";
import SectionContentBox from "./SectionContentBox";
import { MainSection } from "./styles/container";

interface Props {
    children?: ReactNode;
}
const Section = ({ children }: Props) => {
    const { hideSection } = useAction();
    return (
        <MainSection>
            <SectionContentBox>{children}</SectionContentBox>
            <HideSectionButton hideSection={hideSection} />
        </MainSection>
    );
};

export default Section;
