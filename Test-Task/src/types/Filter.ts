import { SightTypes } from "./sightTypes";

export interface FilterState {
    filters: SightTypes[];
    radius: number;
}

export enum FilterActionType {
    SetFilters = "SET_FILTERS",
    SetRadius = "SET_RADIUS",
    SetAll = "SET_ALL",
}

interface SetFilters {
    type: FilterActionType.SetFilters;
    payload: Set<SightTypes>;
}

interface SetFilterRadius {
    type: FilterActionType.SetRadius;
    payload: number;
}

interface SetAllFilters {
    type: FilterActionType.SetAll;
    payload: Filter;
}

export type FilterAction = SetAllFilters | SetFilterRadius | SetFilters;

export class Filter {
    filters: Set<SightTypes>;
    radius: number;
    constructor(filters: Set<SightTypes>, radius: number) {
        this.filters = filters;
        this.radius = radius;
    }
}
