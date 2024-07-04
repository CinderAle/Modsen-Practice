import { Search } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

import { STYLES } from "@/constants/styleConstants";

export const SubmitButton = styled(Button)(() => ({
    width: "100%",
    backgroundColor: STYLES.BLUE_COLOR,
    color: STYLES.WHITE_COLOR,
    borderWidth: STYLES.DEFAULT_BORDER_WIDTH,
    borderStyle: "solid",
    borderColor: STYLES.BLUE_COLOR,
    borderRadius: "10px",
    padding: "10px 0",
    ":hover": {
        backgroundColor: STYLES.WHITE_COLOR,
        color: STYLES.BLUE_COLOR,
        borderColor: STYLES.UNCHECKED_COLOR,
    },
}));

export const SearchIcon = styled(Search)(() => ({
    fontSize: STYLES.ICON_FONT_SIZE,
}));
