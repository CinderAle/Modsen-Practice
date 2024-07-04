import {
    BookmarkButton,
    BookmarkIcon,
    LoginButton,
    LoginIcon,
    SearchButton,
    SearchIcon,
} from "./styles/buttons";
import {
    ButtonsContainer,
    SidebarControlsContainer,
} from "./styles/containers";

interface Props {
    showFilters: () => void;
    showBookmarks: () => void;
    showLogin: () => void;
}

const SidebarControls = ({ showFilters, showBookmarks, showLogin }: Props) => {
    return (
        <SidebarControlsContainer>
            <ButtonsContainer>
                <SearchButton onClick={showFilters}>
                    <SearchIcon />
                </SearchButton>
                <BookmarkButton onClick={showBookmarks}>
                    <BookmarkIcon />
                </BookmarkButton>
            </ButtonsContainer>
            <LoginButton onClick={showLogin}>
                <LoginIcon />
            </LoginButton>
        </SidebarControlsContainer>
    );
};

export default SidebarControls;
