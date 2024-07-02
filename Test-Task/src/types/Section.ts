import { Sight } from "./Sight";
import { RouteInfo } from "./route";

export enum SectionType {
    Bookmark = "BOOKMARK",
    Filter = "FILTER",
    Info = "INFO",
    None = "NONE",
    Route = "ROUTE",
}

interface ShowFilter {
    type: SectionType.Filter;
}

interface ShowBookmark {
    type: SectionType.Bookmark;
}

interface ShowInfo {
    type: SectionType.Info;
    payload: Sight;
}

interface ShowRouteInfo {
    type: SectionType.Route;
    payload: {
        distance: number;
        time: number;
    };
}

interface HideSection {
    type: SectionType.None;
}

export type SectionAction =
    | ShowFilter
    | ShowBookmark
    | ShowInfo
    | HideSection
    | ShowRouteInfo;

export interface SectionState {
    type: SectionType;
    loading: boolean;
    info: Sight | RouteInfo;
}
