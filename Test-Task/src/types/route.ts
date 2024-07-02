import { LatLng, LatLngLiteral } from "google-maps-react-markers";

export enum RouteActionsTypes {
    START = "START",
    END = "END",
    SET_END = "SET_END",
    SET_INFO = "SET_INFO",
}

export type RouteInfo = {
    distance: number;
    time: number;
};

export type RouteState = {
    route: Route;
};

type SetRouteAction = {
    type: RouteActionsTypes.START;
    payload: Route;
};

type SetRouteEndAction = {
    type: RouteActionsTypes.SET_END;
    payload: LatLng | LatLngLiteral;
};

type EndRouteAction = {
    type: RouteActionsTypes.END;
};

export type RouteAction = SetRouteAction | SetRouteEndAction | EndRouteAction;

export class Route {
    from: LatLng | LatLngLiteral;
    to: LatLng | LatLngLiteral | null;
    constructor(
        from: LatLng | LatLngLiteral,
        to: LatLng | LatLngLiteral | null = null,
    ) {
        this.from = from;
        this.to = to;
    }
}
