import SightTypeSelector from "../SightTypeSelector";
import SearchRadiusSelector from "../SearchRadiusSelector";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SightTypes } from "@/types/SightTypes";
import { useAction } from "@/hooks/useAction";
import StyledSubmitButton from "./StyledSubmitButton";
import { FormEvent, useState } from "react";

const METERS_IN_KILOMETER = 1000;

const FilterSection = () => {
    const filtersArray = useTypedSelector((state) => state.filter.filters);
    const radius = useTypedSelector((state) => state.filter.radius);
    const s = useTypedSelector((state) => state.filter);
    const filters = new Set(filtersArray);
    const { setFilters, setRadius } = useAction();
    const [radiusState, setRadiusState] = useState(
        radius / METERS_IN_KILOMETER,
    );
    console.log(s);

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        setFilters(filters);
        setRadius(radiusState * METERS_IN_KILOMETER);
    };

    const addFilter = (filter: SightTypes) => {
        filters.add(filter);
    };

    const removeFilter = (filter: SightTypes) => {
        filters.delete(filter);
    };

    const changeRadius = (value: string) => {
        if (!isNaN(Number(value))) {
            setRadiusState(Number(value));
        }
    };

    return (
        <form onSubmit={submitForm}>
            <SightTypeSelector
                filters={filters}
                addFilter={addFilter}
                removeFilter={removeFilter}
            />
            <SearchRadiusSelector value={radiusState} onChange={changeRadius} />
            <StyledSubmitButton />
        </form>
    );
};

export default FilterSection;
