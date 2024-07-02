import { Dispatch } from "redux";

import { SectionAction, SectionType } from "@/types/section";
import { Sight } from "@/types/sight";

const commonDispatch = (
    section: SectionType.Bookmark | SectionType.Filter | SectionType.None,
) => {
    return (dispatch: Dispatch<SectionAction>) => {
        dispatch({ type: section });
    };
};

export const showFilter = () => {
    return commonDispatch(SectionType.Filter);
};

export const hideSection = () => {
    return commonDispatch(SectionType.None);
};

export const showBookmark = () => {
    return commonDispatch(SectionType.Bookmark);
};

export const showRouteInfo = (distance: number, time: number) => {
    return (dispatch: Dispatch<SectionAction>) => {
        dispatch({ type: SectionType.Route, payload: { distance, time } });
    };
};

export const showSightInfo = (sight: Sight) => {
    return (dispatch: Dispatch<SectionAction>) => {
        dispatch({ type: SectionType.Info, payload: sight });
    };
};
