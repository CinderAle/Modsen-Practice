import { CloseRounded } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

import { STYLES } from "@/constants/styleConstants";

export const CancelRouteButton = styled(Button)(() => ({
    minWidth: 0,
    minHeight: 0,
    padding: "0 10px",
    color: STYLES.ROUTE_BLUE_COLOR,
}));

export const CancelRouteIcon = styled(CloseRounded)(() => ({
    fontSize: STYLES.ICON_FONT_SIZE,
}));
