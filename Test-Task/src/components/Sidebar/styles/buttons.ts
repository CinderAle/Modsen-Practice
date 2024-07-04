import { BookmarkRounded, Login, Search } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

import { STYLES } from "@/constants/styleConstants";

const BUTTON_HEIGHT = "60px";

const getButtonCommonStyle = (fillColor: string) => {
    return {
        width: "100%",
        backgroundColor: fillColor,
        height: BUTTON_HEIGHT,
        color: STYLES.WHITE_COLOR,
        borderWidth: STYLES.DEFAULT_BORDER_WIDTH,
        borderStyle: "solid",
        borderColor: fillColor,
        borderRadius: STYLES.BORDER_RADIUS,
        ":hover": {
            backgroundColor: STYLES.WHITE_COLOR,
            color: fillColor,
            borderColor: STYLES.UNCHECKED_COLOR,
        },
    };
};

export const SearchButton = styled(Button)(() => ({
    ...getButtonCommonStyle(STYLES.BLUE_COLOR),
    margin: "18px 0",
}));

export const BookmarkButton = styled(Button)(() =>
    getButtonCommonStyle(STYLES.RED_COLOR),
);

export const LoginButton = styled(Button)(() =>
    getButtonCommonStyle(STYLES.GRAY_COLOR),
);

export const SearchIcon = styled(Search)(() => ({
    fontSize: STYLES.ICON_FONT_SIZE,
}));

export const BookmarkIcon = styled(BookmarkRounded)(() => ({
    fontSize: STYLES.ICON_FONT_SIZE,
}));

export const LoginIcon = styled(Login)(() => ({
    fontSize: STYLES.ICON_FONT_SIZE,
}));
