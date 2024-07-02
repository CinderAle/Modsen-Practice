import { Dispatch } from "redux";

import { ZoomAction, ZoomActionType } from "../reducers/zoomReducer";

export const zoomIn = () => {
    return (dispatch: Dispatch<ZoomAction>) => {
        dispatch({type: ZoomActionType.Increase});
    }
};

export const zoomOut = () => {
    return (dispatch: Dispatch<ZoomAction>) => {
        dispatch({type: ZoomActionType.Decrease});
    }
};