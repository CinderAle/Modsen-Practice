import { RouteAction, RouteActionsTypes, RouteState } from "@/types/route";

const initialState: RouteState = {
    route: {
        from: { lat: 0, lng: 0 },
        to: { lat: 0, lng: 0 },
    },
};

export const routeReducer = (
    state: RouteState = initialState,
    action: RouteAction,
): RouteState => {
    switch (action.type) {
        case RouteActionsTypes.START:
            return { route: action.payload };
        case RouteActionsTypes.SET_END:
            return { route: { ...state.route, to: action.payload } };
        case RouteActionsTypes.END:
            return { route: { ...state.route, to: state.route.from } };
        default:
            return state;
    }
};
