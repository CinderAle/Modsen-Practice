import { Dispatch } from "redux";
import { SightTypes } from "@/types/SightTypes";
import { Filter, FilterAction, FilterActionType } from "@/types/Filter";

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
