import { Dispatch } from "redux";
import { FilterAction, FilterActionType } from "../reducers/filterReducer";
import { SightTypes } from "@/types/SightTypes";

export const setFilters = (filters: Set<SightTypes>) => {
    return (dispatch: Dispatch<FilterAction>) => {
        dispatch({ type: FilterActionType.Set, payload: filters });
    };
};
