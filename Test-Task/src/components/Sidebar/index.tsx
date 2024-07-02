import { useAction } from "@/hooks/useAction";

import MappieIcon from "./MappieIcon";
import SidebarControls from "./StyledSidebarControls";
import StyledSidebarGrid from "./StyledSidebarGrid";

const login = () => {
    console.log("login");
};

const Sidebar = () => {
    const { showBookmark, showFilter } = useAction();
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
