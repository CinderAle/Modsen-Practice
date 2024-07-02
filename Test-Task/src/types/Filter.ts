import { SightTypes } from "./sightTypes";

export type FilterState = {
    filters: SightTypes[];
    radius: number;
};

export enum FilterActionType {
    SetFilters = "SET_FILTERS",
    SetRadius = "SET_RADIUS",
    SetAll = "SET_ALL",
}

type SetFilters = {
    type: FilterActionType.SetFilters;
    payload: Set<SightTypes>;
};

type SetFilterRadius = {
    type: FilterActionType.SetRadius;
    payload: number;
};

type SetAllFilters = {
    type: FilterActionType.SetAll;
    payload: Filter;
};

export type FilterAction = SetAllFilters | SetFilterRadius | SetFilters;

export class Filter {
    filters: Set<SightTypes>;
    radius: number;
    constructor(filters: Set<SightTypes>, radius: number) {
        this.filters = filters;
        this.radius = radius;
    }
}
