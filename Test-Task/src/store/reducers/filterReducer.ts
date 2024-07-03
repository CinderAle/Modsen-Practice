import { constants } from "@/constants/constants";
import { FilterAction, FilterActionType, FilterState } from "@/types/filter";

const initialState: FilterState = {
    radius: constants.DEFAULT_RADIUS * constants.METERS_IN_KILOMETER,
    filters: [],
};

export const filterReducer = (
    state: FilterState = initialState,
    action: FilterAction,
): FilterState => {
    switch (action.type) {
        case FilterActionType.SetFilters:
            return { ...state, filters: [...action.payload] };
        case FilterActionType.SetRadius:
            return { ...state, radius: action.payload };
        case FilterActionType.SetAll:
            return {
                radius: action.payload.radius,
                filters: [...action.payload.filters],
            };
        default:
            return state;
    }
};
