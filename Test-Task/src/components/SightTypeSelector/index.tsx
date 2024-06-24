import { SightTypes } from "../../types/SightTypes";
import StyledSelectorHeader from "./StyledSelectorHeader";
import StyledTypeSelectorBox from "./StyledTypeSelectorBox";
import StyledTypeSelectorCheckbox from "./StyledTypeSelectorCheckbox";

const SightTypeSelector = () => {
  return (
    <>
      <StyledSelectorHeader>Искать</StyledSelectorHeader>
      <StyledTypeSelectorBox>
        {Object.values(SightTypes)
          .filter((e) => isNaN(Number(e)))
          .map((e) => (
            <StyledTypeSelectorCheckbox
              onSelect={() => {
                console.log(`${e} added`);
              }}
              onRemove={() => {
                console.log(`${e} removed`);
              }}
              iconName={e.toString()}
            />
          ))}
      </StyledTypeSelectorBox>
    </>
  );
};

export default SightTypeSelector;
