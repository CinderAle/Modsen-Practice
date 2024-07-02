import { useAction } from "@/hooks/useAction";
import StyledSidebarGrid from "./StyledSidebarGrid";
import MappieIcon from "./MappieIcon";
import SidebarControls from "./StyledSidebarControls";

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
