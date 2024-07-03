import { combineReducers } from "redux";

import { filterReducer } from "./filterReducer";
import { routeReducer } from "./routeReducer";
import { sectionReducer } from "./sectionReducer";
import { zoomReducer } from "./zoomReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    section: sectionReducer,
    zoom: zoomReducer,
    filter: filterReducer,
    route: routeReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
