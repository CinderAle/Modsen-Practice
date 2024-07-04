import { STYLES } from "@/constants/styleConstants";
import { ArrowLeftRounded } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const commonButton = (fillColor: string) => ({
    backgroundColor: fillColor,
    borderWidth: STYLES.DEFAULT_BORDER_WIDTH,
    fontFamily: "Mont",
    fontWeight: "bold",
    borderStyle: "solid",
    borderColor: fillColor,
    borderRadius: STYLES.BORDER_RADIUS_VALUE,
    color: STYLES.WHITE_COLOR,
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
        color: fillColor,
        borderColor: STYLES.UNCHECKED_COLOR,
    },
});

export const AuthButton = styled(Button)(() => ({
    ...commonButton(STYLES.BLUE_COLOR),
    textTransform: "unset",
}));

export const RegisterButton = styled(Button)(() => ({
    ...commonButton(STYLES.RED_COLOR),
    textTransform: "unset",
}));

export const SuggestLink = styled(Link)(() => ({
    marginLeft: "10px",
    fontWeight: "bold",
    color: STYLES.ROUTE_BLUE_COLOR,
    textDecoration: "none",
}));

export const MapLink = styled(Link)(() => ({
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
    marginLeft: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    color: STYLES.CHECKED_COLOR,
    textDecoration: "none",
}));

export const MapLinkIcon = styled(ArrowLeftRounded)(() => ({
    fontSize: "28px",
}));
