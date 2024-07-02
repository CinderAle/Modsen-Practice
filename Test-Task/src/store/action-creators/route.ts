import { Route, RouteAction, RouteActionsTypes } from "@/types/route";
import { LatLng, LatLngLiteral } from "google-maps-react-markers";
import { Dispatch } from "redux";

const commonDispatch = (action: RouteAction) => {
    return (dispatch: Dispatch<RouteAction>) => {
        dispatch(action);
    };
};

export const setRoute = (route: Route) => {
    return commonDispatch({ type: RouteActionsTypes.START, payload: route });
};

export const endRoute = () => {
    return commonDispatch({ type: RouteActionsTypes.END });
};

export const setRouteEnd = (end: LatLng | LatLngLiteral) => {
    return commonDispatch({ type: RouteActionsTypes.SET_END, payload: end });
};
