import { Sight } from "./Sight";

export enum SectionType {
    Bookmark = "BOOKMARK",
    Filter = "FILTER",
    Info = "INFO",
    None = "NONE",
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

interface HideSection {
    type: SectionType.None;
}

export type SectionAction = ShowFilter | ShowBookmark | ShowInfo | HideSection;

export interface SectionState {
    type: SectionType;
    loading: boolean;
    info: Sight;
}
