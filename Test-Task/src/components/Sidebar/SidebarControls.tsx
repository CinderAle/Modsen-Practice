import userIcon from "@/assets/png/user.png";
import { useTypedSelector } from "@/hooks/useTypedSelector";

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
    UserIconContainer,
} from "./styles/containers";
import { UserIcon } from "./styles/logo";

interface Props {
    showFilters: () => void;
    showBookmarks: () => void;
    showLogin: () => void;
}

const SidebarControls = ({ showFilters, showBookmarks, showLogin }: Props) => {
    const isLoggedIn = useTypedSelector((state) => state.user.user.isLoggedIn);
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
            {isLoggedIn ? (
                <UserIconContainer onClick={showLogin}>
                    <UserIcon src={userIcon} />
                </UserIconContainer>
            ) : (
                <LoginButton onClick={showLogin}>
                    <LoginIcon />
                </LoginButton>
            )}
        </SidebarControlsContainer>
    );
};

export default SidebarControls;
