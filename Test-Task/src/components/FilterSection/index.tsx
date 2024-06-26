import SightTypeSelector from "../SightTypeSelector";
import SearchRadiusSelector from "../SearchRadiusSelector";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SightTypes } from "@/types/SightTypes";
import { useAction } from "@/hooks/useAction";
import StyledSubmitButton from "./StyledSubmitButton";
import { FormEvent } from "react";

const FilterSection = () => {
    const filtersArray = useTypedSelector((state) => state.filter.filters);
    const filters = new Set(filtersArray);
    const { setFilters } = useAction();

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        setFilters(filters);
    };

    const addFilter = (filter: SightTypes) => {
        filters.add(filter);
    };

    const removeFilter = (filter: SightTypes) => {
        filters.delete(filter);
    };

    return (
        <form onSubmit={submitForm}>
            <SightTypeSelector
                filters={filters}
                addFilter={addFilter}
                removeFilter={removeFilter}
            />
            <SearchRadiusSelector />
            <StyledSubmitButton />
        </form>
    );
};

export default FilterSection;
