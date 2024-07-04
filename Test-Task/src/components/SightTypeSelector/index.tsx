import { SightTypes } from "../../types/sightTypes";
import { FilterBox } from "./styles/box";
import { Heading } from "./styles/heading";
import TypeSelectorCheckbox from "./TypeSelectorCheckbox";

interface Props {
    addFilter: (filter: SightTypes) => void;
    removeFilter: (filter: SightTypes) => void;
    filters: Set<SightTypes>;
}

const SightTypeSelector = ({ addFilter, removeFilter, filters }: Props) => {
    return (
        <div>
            <Heading>Искать</Heading>
            <FilterBox>
                {Object.values(SightTypes).map((e, id) => {
                    return (
                        typeof e !== "string" && (
                            <TypeSelectorCheckbox
                                key={id}
                                onSelect={addFilter}
                                onRemove={removeFilter}
                                value={e}
                                isChecked={filters.has(e)}
                            />
                        )
                    );
                })}
            </FilterBox>
        </div>
    );
};

export default SightTypeSelector;
