import { SectionAction, SectionType } from "@/types/Section"
import { Sight } from "@/types/Sight";
import { Dispatch } from "redux"

const commonDispatch = (section: SectionType.Bookmark | SectionType.Filter | SectionType.None) => {
    return (dispatch: Dispatch<SectionAction>) => {
        dispatch({type: section});
    }
}

export const showFilter = () => {
    return commonDispatch(SectionType.Filter);
}

export const hideSection = () => {
    return commonDispatch(SectionType.None);
}

export const showBookmark = () => {
    return commonDispatch(SectionType.Bookmark);
}

export const showSightInfo = (sight: Sight) => {
    return (dispatch: Dispatch<SectionAction>) => {
        dispatch({type: SectionType.Info, payload: sight});
    }
}