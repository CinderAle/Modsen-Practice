import { useAction } from "@/hooks/useAction";

import MappieIcon from "./MappieIcon";
import SidebarControls from "./StyledSidebarControls";
import StyledSidebarGrid from "./StyledSidebarGrid";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { constants } from "@/constants/constants";

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
        <StyledSidebarGrid>
            <MappieIcon />
            <SidebarControls
                showFilters={showFilter}
                showBookmarks={showBookmark}
                showLogin={login}
            />
        </StyledSidebarGrid>
    );
};

export default Sidebar;
