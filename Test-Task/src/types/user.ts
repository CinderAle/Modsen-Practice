import { Sight } from "./sight";

export type UserState = {
    user: User;
    loading: boolean;
};

export enum UserActionType {
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    LOADING = "LOADING",
}

type UserRegister = {
    type: UserActionType.REGISTER;
    payload: User;
};

type UserLogin = {
    type: UserActionType.LOGIN;
    payload: User;
};

type UserLogout = {
    type: UserActionType.LOGOUT;
};

type UserLoading = {
    type: UserActionType.LOADING;
};

export type UserAction = UserRegister | UserLogin | UserLogout | UserLoading;

export class User {
    login: string;
    isLoggedIn: boolean;
    bookmarks: Sight[];
    constructor(
        login: string = "",
        isLoggedIn: boolean = false,
        bookmarks: Sight[] = [],
    ) {
        this.login = login;
        this.isLoggedIn = isLoggedIn;
        this.bookmarks = bookmarks;
    }
}
