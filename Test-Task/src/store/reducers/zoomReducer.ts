import { ZOOM_CONSTANTS } from "@/constants/zoomConstants";

export enum ZoomActionType {
    Increase = "INCREASE",
    Decrease = "DECREASE",
}

export type ZoomAction = {
    type: ZoomActionType;
};

type ZoomState = {
    value: number;
};

const initialState: ZoomState = {
    value: ZOOM_CONSTANTS.DEFAULT_ZOOM,
};

export const zoomReducer = (
    state: ZoomState = initialState,
    action: ZoomAction,
): ZoomState => {
    switch (action.type) {
        case ZoomActionType.Increase:
            return state.value === ZOOM_CONSTANTS.MAX_ZOOM
                ? state
                : { value: state.value + 1 };
        case ZoomActionType.Decrease:
            return state.value === ZOOM_CONSTANTS.MIN_ZOOM
                ? state
                : { value: state.value - 1 };
        default:
            return state;
    }
};
