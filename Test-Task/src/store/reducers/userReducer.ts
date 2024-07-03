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
        case UserActionType.REGISTER:
            return { user: action.payload, loading: false };
        case UserActionType.LOGIN:
            return { user: action.payload, loading: false };
        case UserActionType.LOGOUT:
            return initialState;
        case UserActionType.LOADING:
        default:
            return state;
    }
};
