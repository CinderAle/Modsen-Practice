import { SightTypes } from "../../types/sightTypes";
import StyledSelectorHeader from "./StyledSelectorHeader";
import StyledTypeSelectorBox from "./StyledTypeSelectorBox";
import StyledTypeSelectorCheckbox from "./StyledTypeSelectorCheckbox";

interface Props {
    addFilter: (filter: SightTypes) => void;
    removeFilter: (filter: SightTypes) => void;
    filters: Set<SightTypes>;
}

const SightTypeSelector = ({ addFilter, removeFilter, filters }: Props) => {
    return (
        <>
            <StyledSelectorHeader>Искать</StyledSelectorHeader>
            <StyledTypeSelectorBox>
                {Object.values(SightTypes).map((e, id) => {
                    return (
                        typeof e !== "string" && (
                            <StyledTypeSelectorCheckbox
                                key={id}
                                onSelect={addFilter}
                                onRemove={removeFilter}
                                value={e}
                                isChecked={filters.has(e)}
                            />
                        )
                    );
                })}
            </StyledTypeSelectorBox>
        </>
    );
};

export default SightTypeSelector;
