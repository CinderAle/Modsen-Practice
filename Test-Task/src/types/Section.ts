import { Sight } from "./sight";
import { RouteInfo } from "./route";

export enum SectionType {
    Bookmark = "BOOKMARK",
    Filter = "FILTER",
    Info = "INFO",
    None = "NONE",
    Route = "ROUTE",
}

type ShowFilter = {
    type: SectionType.Filter;
};

type ShowBookmark = {
    type: SectionType.Bookmark;
};

type ShowInfo = {
    type: SectionType.Info;
    payload: Sight;
};

type ShowRouteInfo = {
    type: SectionType.Route;
    payload: {
        distance: number;
        time: number;
    };
};

type HideSection = {
    type: SectionType.None;
};

export type SectionAction =
    | ShowFilter
    | ShowBookmark
    | ShowInfo
    | HideSection
    | ShowRouteInfo;

export type SectionState = {
    type: SectionType;
    loading: boolean;
    info: Sight | RouteInfo;
};
