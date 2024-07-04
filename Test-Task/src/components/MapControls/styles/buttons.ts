import { STYLES } from "@/constants/styleConstants";
import {
    AddRounded,
    MyLocationRounded,
    RemoveRounded,
} from "@mui/icons-material";
import { Button, styled } from "@mui/material";

const ICON_FONT_SIZE = 25;

export const LocateButton = styled(Button)(() => ({
    marginRight: "18px",
    backgroundColor: STYLES.WHITE_COLOR,
    borderWidth: STYLES.DEFAULT_BORDER_WIDTH,
    borderStyle: "solid",
    borderColor: STYLES.UNCHECKED_COLOR,
    borderRadius: STYLES.BORDER_RADIUS_VALUE,
    color: STYLES.GRAY_COLOR,
    padding: "10px",
    minWidth: "0",
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
    },
}));

export const ZoomInButton = styled(Button)(() => ({
    backgroundColor: STYLES.WHITE_COLOR,
    color: STYLES.GRAY_COLOR,
    padding: "5px",
    minWidth: "0",
    "::after": {
        content: '""',
        width: "3px",
        height: "20px",
        backgroundColor: STYLES.UNCHECKED_COLOR,
        marginLeft: "10px",
        borderRadius: "2px",
    },
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
    },
}));

export const ZoomOutButton = styled(Button)(() => ({
    backgroundColor: STYLES.WHITE_COLOR,
    color: STYLES.GRAY_COLOR,
    padding: "5px",
    minWidth: "0",
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
    },
}));

export const LocateIcon = styled(MyLocationRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
}));
export const ZoomInIcon = styled(AddRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
}));
export const ZoomOutIcon = styled(RemoveRounded)(() => ({
    fontSize: ICON_FONT_SIZE,
}));
