import { combineReducers } from "redux"
import { sectionReducer } from "./sectionReducer"
import { zoomReducer } from "./zoomReducer";

export const rootReducer = combineReducers({
    section: sectionReducer,
    zoom: zoomReducer
});

export type RootState = ReturnType<typeof rootReducer>;