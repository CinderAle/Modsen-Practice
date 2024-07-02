import { BookmarkRounded, Login, Search } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";

interface Props {
    showFilters: () => void;
    showBookmarks: () => void;
    showLogin: () => void;
}

const FONT_SIZE = 30;
const BUTTON_HEIGHT = "60px";
const WHITE_COLOR = "white";

const StyledSidebarControls = ({
    showFilters,
    showBookmarks,
    showLogin,
}: Props) => {
    return (
        <Grid
            wrap="nowrap"
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            height={"100%"}
        >
            <Grid
                container
                wrap="nowrap"
                alignItems={"center"}
                direction={"column"}
                marginTop={3}
            >
                <Button
                    fullWidth
                    sx={{
                        bgcolor: "#5E7BC7",
                        height: BUTTON_HEIGHT,
                        marginY: 3,
                    }}
                    onClick={showFilters}
                >
                    <Search sx={{ color: WHITE_COLOR, fontSize: FONT_SIZE }} />
                </Button>
                <Button
                    fullWidth
                    sx={{ bgcolor: "#C75E5E", height: BUTTON_HEIGHT }}
                    onClick={showBookmarks}
                >
                    <BookmarkRounded
                        sx={{ color: WHITE_COLOR, fontSize: FONT_SIZE }}
                    />
                </Button>
            </Grid>
            <Button
                fullWidth
                sx={{ bgcolor: "#808080", height: BUTTON_HEIGHT }}
                onClick={showLogin}
            >
                <Login sx={{ color: WHITE_COLOR, fontSize: FONT_SIZE }} />
            </Button>
        </Grid>
    );
};

export default StyledSidebarControls;
