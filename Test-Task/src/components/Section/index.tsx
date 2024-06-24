import { useAction } from "@/hooks/useAction";
import { ReactNode } from "react";
import StyledSectionContainer from "./StyledSectionContainer";
import StyledSectionContentBox from "./StyledSectionContentBox";
import StyledHideSectionButton from "./StyledHideSectionButton";

interface Props {
  children?: ReactNode;
}
const index = ({ children }: Props) => {
  const { hideSection } = useAction();
  return (
    <StyledSectionContainer>
      <StyledSectionContentBox>{children}</StyledSectionContentBox>
      <StyledHideSectionButton hideSection={hideSection} />
    </StyledSectionContainer>
  );
};

export default index;
