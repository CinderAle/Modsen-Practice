import { FormEvent, useState } from "react";

import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SightTypes } from "@/types/sightTypes";

import SearchRadiusSelector from "../SearchRadiusSelector";
import SightTypeSelector from "../SightTypeSelector";
import StyledSubmitButton from "./StyledSubmitButton";
import { constants } from "@/constants/constants";

const FilterSection = () => {
    const filtersArray = useTypedSelector((state) => state.filter.filters);
    const radius = useTypedSelector((state) => state.filter.radius);
    const s = useTypedSelector((state) => state.filter);
    const filters = new Set(filtersArray);
    const { setFilters, setRadius } = useAction();
    const [radiusState, setRadiusState] = useState(
        radius / constants.METERS_IN_KILOMETER,
    );
    console.log(s);

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        setFilters(filters);
        setRadius(radiusState * constants.METERS_IN_KILOMETER);
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
