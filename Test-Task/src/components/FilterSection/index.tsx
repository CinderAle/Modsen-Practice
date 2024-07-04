import { FormEvent, useState } from "react";

import { constants } from "@/constants/constants";
import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SightTypes } from "@/types/sightTypes";

import SearchRadiusSelector from "../SearchRadiusSelector";
import SightTypeSelector from "../SightTypeSelector";
import { SearchIcon, SubmitButton } from "./styles/button";
import { TypeForm } from "./styles/form";

const FilterSection = () => {
    const filtersArray = useTypedSelector((state) => state.filter.filters);
    const radius = useTypedSelector((state) => state.filter.radius);
    const filters = new Set(filtersArray);
    const { setFilters, setRadius } = useAction();
    const [radiusState, setRadiusState] = useState(
        radius / constants.METERS_IN_KILOMETER,
    );

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
        <TypeForm onSubmit={submitForm}>
            <div>
                <SightTypeSelector
                    filters={filters}
                    addFilter={addFilter}
                    removeFilter={removeFilter}
                />
                <SearchRadiusSelector
                    value={radiusState}
                    onChange={changeRadius}
                />
            </div>
            <SubmitButton type="submit">
                <SearchIcon />
            </SubmitButton>
        </TypeForm>
    );
};

export default FilterSection;
