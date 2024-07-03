import { constants } from "@/constants/constants";
import MainPage from "@/pages/MainPage";
import { publicRoutes } from "@/routes";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    const isLoggedIn = false;
    return (
        <Routes>
            {!isLoggedIn ? (
                publicRoutes.map(({ path, component }) => (
                    <Route path={path} Component={component} />
                ))
            ) : (
                <Route
                    path={constants.MAP_ROUTE}
                    Component={() => <MainPage />}
                />
            )}
            <Route
                path="*"
                Component={() => <Navigate to={constants.MAP_ROUTE} />}
            />
        </Routes>
    );
};

export default AppRouter;
