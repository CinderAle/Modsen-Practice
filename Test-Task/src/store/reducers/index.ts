import { combineReducers } from "redux";

import { filterReducer } from "./filterReducer";
import { routeReducer } from "./routeReducer";
import { sectionReducer } from "./sectionReducer";
import { userReducer } from "./userReducer";
import { zoomReducer } from "./zoomReducer";

export const rootReducer = combineReducers({
    section: sectionReducer,
    zoom: zoomReducer,
    filter: filterReducer,
    route: routeReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
