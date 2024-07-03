import { useAction } from "@/hooks/useAction";

import MappieIcon from "./MappieIcon";
import SidebarControls from "./StyledSidebarControls";
import StyledSidebarGrid from "./StyledSidebarGrid";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const Sidebar = () => {
    const { showBookmark, showFilter } = useAction();

    const isLoggedIn = useTypedSelector((state) => state.user.user.isLoggedIn);
    const { logout } = useAction();

    const login = () => {
        if (!isLoggedIn) console.log("login");
        else logout();
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
