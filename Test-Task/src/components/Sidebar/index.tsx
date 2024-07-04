import { useNavigate } from "react-router-dom";

import LogoSvg from "@/assets/svg/logo.svg";
import { constants } from "@/constants/constants";
import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";

import SidebarControls from "./SidebarControls";
import { SidebarContainer } from "./styles/containers";
import { Logo } from "./styles/logo";

const Sidebar = () => {
    const { showBookmark, showFilter } = useAction();

    const isLoggedIn = useTypedSelector((state) => state.user.user.isLoggedIn);
    const { logout } = useAction();
    const navigate = useNavigate();

    const login = () => {
        if (isLoggedIn) logout();
        navigate(constants.LOGIN_ROUTE);
    };

    return (
        <SidebarContainer>
            <Logo src={LogoSvg} />
            <SidebarControls
                showFilters={showFilter}
                showBookmarks={showBookmark}
                showLogin={login}
            />
        </SidebarContainer>
    );
};

export default Sidebar;
