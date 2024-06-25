import { SightTypes } from "@/types/SightTypes";

interface FilterState {
    filters: SightTypes[];
}

export enum FilterActionType {
    Set = "SET",
}

export interface FilterAction {
    type: FilterActionType;
    payload: Set<SightTypes>;
}

const initialState: FilterState = {
    filters: [],
};

export const filterReducer = (
    state: FilterState = initialState,
    action: FilterAction,
): FilterState => {
    switch (action.type) {
        case FilterActionType.Set:
            return { filters: [...action.payload] };
        default:
            return state;
    }
};
