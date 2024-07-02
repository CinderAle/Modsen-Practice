import { Dispatch } from "redux";

import { Filter, FilterAction, FilterActionType } from "@/types/filter";
import { SightTypes } from "@/types/sightTypes";

export const setFilters = (filters: Set<SightTypes>) => {
    return (dispatch: Dispatch<FilterAction>) => {
        dispatch({ type: FilterActionType.SetFilters, payload: filters });
    };
};

export const setRadius = (radius: number) => {
    return (dispatch: Dispatch<FilterAction>) => {
        dispatch({ type: FilterActionType.SetRadius, payload: radius });
    };
};

export const setAllFilters = (filters: Set<SightTypes>, radius: number) => {
    return (dispatch: Dispatch<FilterAction>) => {
        dispatch({
            type: FilterActionType.SetAll,
            payload: new Filter(filters, radius),
        });
    };
};
