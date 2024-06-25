import { combineReducers } from "redux";
import { sectionReducer } from "./sectionReducer";
import { zoomReducer } from "./zoomReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    section: sectionReducer,
    zoom: zoomReducer,
    filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
