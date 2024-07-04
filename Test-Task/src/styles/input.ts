import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const AuthInput = styled.input`
    outline: none;
    ${STYLES.BORDER_RADIUS}
    ${STYLES.DEFAULT_BORDER}
    padding: 10px;
    font-weight: bold;
    color: ${STYLES.CHECKED_COLOR};
    margin: 10px 0;
    transition: ${STYLES.TRANSITION_VALUE};
    &:hover {
        border-color: ${STYLES.BLUE_COLOR};
    }
    &:focus {
        border-color: ${STYLES.BLUE_COLOR};
    }
`;
