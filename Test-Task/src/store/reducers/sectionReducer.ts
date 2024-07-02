import { SectionAction, SectionState, SectionType } from "@/types/section";
import { Sight } from "@/types/sight";
import { AnyAction } from "redux";

const initialState = {
    type: SectionType.Bookmark,
    loading: false,
    info: new Sight("Aboba"),
};

export const sectionReducer = (
    state: SectionState = initialState,
    action: SectionAction | AnyAction,
): SectionState => {
    switch (action.type) {
        case SectionType.Filter:
        case SectionType.Bookmark:
        case SectionType.None:
            return {
                type: action.type,
                loading: false,
                info: new Sight(""),
            };
        case SectionType.Info:
            return { type: action.type, loading: false, info: action.payload };
        case SectionType.Route:
            return { type: action.type, loading: false, info: action.payload };
        default:
            return state;
    }
};
