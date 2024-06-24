import { SectionAction, SectionState, SectionType } from "@/types/Section";
import { Sight } from "@/types/Sight";
import { AnyAction } from "redux";

const initialState = {
    type: SectionType.Bookmark,
    loading: false,
    info: new Sight("Aboba")
}

export const sectionReducer = (state: SectionState = initialState, action: SectionAction | AnyAction) : SectionState => {
    switch(action.type) {
        case SectionType.Filter:
        case SectionType.Bookmark:
        case SectionType.None:
            return {type: action.type, loading: false, info: new Sight("Aboba")};
        case SectionType.Info:
            return {type: action.type, loading: false, info: action.payload};
        default:
            return state;
    }
}