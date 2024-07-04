import { STYLES } from "@/constants/styleConstants";
import { InputProps } from "@mui/material";
import styled from "styled-components";

export const RadiusSelector = styled.input.attrs<InputProps>(() => ({
    type: "number",
}))`
    ${STYLES.DEFAULT_BORDER}
    ${STYLES.BORDER_RADIUS}
    padding: 14px 24px;
    outline: none;
    width: 120px;
    transition: ${STYLES.TRANSITION_VALUE};
    &:hover {
        border-color: ${STYLES.BLUE_COLOR};
    }
`;
