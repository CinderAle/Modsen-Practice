import { ArrowRightRounded, BookmarkRounded } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

import { STYLES } from "@/constants/styleConstants";

const ICON_FONT_SIZE = "26px";

export const RemoveBookmarkButton = styled(Button)(() => ({
    color: STYLES.RED_COLOR,
    minWidth: 0,
    padding: 0,
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
    },
}));

export const OpenBookmarkButton = styled(Button)(() => ({
    color: STYLES.CHECKED_COLOR,
    minWidth: 0,
    padding: 0,
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
    },
}));

export const RemoveBookmarkIcon = styled(BookmarkRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
}));

export const OpenBookmarkIcon = styled(ArrowRightRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
}));
