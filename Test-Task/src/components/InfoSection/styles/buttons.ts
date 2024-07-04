import { STYLES } from "@/constants/styleConstants";
import { BookmarkRounded, FmdGoodRounded } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

const getCommonButtonStyle = (fillColor: string) => ({
    fontFamily: "Mont",
    fontSize: "16px",
    backgroundColor: fillColor,
    borderRadius: "6px",
    color: STYLES.WHITE_COLOR,
    padding: "5px 10px",
    ":hover": {
        backgroundColor: fillColor,
    },
});

const ICON_FONT_SIZE = "24px";
const ICON_MARGIN = "8px";

export const BookmarkAddButton = styled(Button)(() => ({
    ...getCommonButtonStyle(STYLES.RED_COLOR),
    textTransform: "unset",
}));

export const BookmarkRemoveButton = styled(Button)(() => ({
    ...getCommonButtonStyle(STYLES.WHITE_COLOR),
    borderWidth: STYLES.DEFAULT_BORDER_WIDTH,
    borderStyle: "solid",
    borderColor: STYLES.UNCHECKED_COLOR,
    color: STYLES.UNCHECKED_COLOR,
    textTransform: "unset",
}));

export const RouteButton = styled(Button)(() => ({
    ...getCommonButtonStyle(STYLES.BLUE_COLOR),
    textTransform: "unset",
}));

export const BookmarkIcon = styled(BookmarkRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
    marginRight: ICON_MARGIN,
}));

export const RouteIcon = styled(FmdGoodRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
    marginRight: ICON_MARGIN,
}));
