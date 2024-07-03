import { constants } from "@/constants/constants";
import Authorization from "@/pages/Authorization";
import MainPage from "@/pages/MainPage";
import Registration from "@/pages/Registration";

export const publicRoutes = [
    {
        path: constants.LOGIN_ROUTE,
        component: Authorization,
    },
    {
        path: constants.REGISTER_ROUTE,
        component: Registration,
    },
    {
        path: constants.MAP_ROUTE,
        component: MainPage,
    },
];
