import { User, UserAction, UserActionType, UserState } from "@/types/user";

const initialState: UserState = {
    user: new User(),
    loading: false,
};

export const userReducer = (
    state: UserState = initialState,
    action: UserAction,
): UserState => {
    switch (action.type) {
        case UserActionType.LOGIN:
            return {
                user: { ...action.payload, isLoggedIn: true },
                loading: false,
            };
        case UserActionType.SET_BOOKMARKS:
            return {
                user: { ...state.user, bookmarks: action.payload },
                loading: false,
            };
        case UserActionType.LOGOUT:
            return initialState;
        case UserActionType.REGISTER:
        case UserActionType.LOADING:
        default:
            return state;
    }
};
