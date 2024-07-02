import { combineReducers } from "redux";
import { sectionReducer } from "./sectionReducer";
import { zoomReducer } from "./zoomReducer";
import { filterReducer } from "./filterReducer";
import { routeReducer } from "./routeReducer";

export const rootReducer = combineReducers({
    section: sectionReducer,
    zoom: zoomReducer,
    filter: filterReducer,
    route: routeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
