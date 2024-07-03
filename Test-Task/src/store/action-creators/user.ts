import { Sight } from "@/types/sight";
import { User, UserAction, UserActionType } from "@/types/user";
import { Dispatch } from "redux";

export const register = (user: User) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionType.REGISTER, payload: user });
    };
};

export const login = (user: User) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionType.LOGIN, payload: user });
    };
};

export const logout = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionType.LOGOUT });
    };
};

export const setUserBookmarks = (bookmarks: Sight[]) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionType.SET_BOOKMARKS, payload: bookmarks });
    };
};
