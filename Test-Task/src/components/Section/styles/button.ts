import { STYLES } from "@/constants/styleConstants";
import { ArrowLeftRounded } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

export const HideButton = styled(Button)(() => ({
    minWidth: "45px",
    height: "80px",
    backgroundColor: STYLES.WHITE_COLOR,
    border: "none",
    borderRadius: STYLES.BORDER_RADIUS_VALUE,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
    },
}));

export const ArrowIcon = styled(ArrowLeftRounded)(() => ({
    fontSize: 30,
    color: STYLES.CHECKED_COLOR,
}));
