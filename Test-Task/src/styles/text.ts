import styled from "styled-components";

import { STYLES } from "@/constants/styleConstants";

export const AuthHeading = styled.h2`
    ${STYLES.HEADING_FONT_SIZE};
    text-align: center;
`;

export const SuggestParagraph = styled.p`
    font-size: 16px;
    margin-top: 10px;
`;

export const ErrorParagraph = styled.p`
    color: ${STYLES.RED_COLOR};
    margin-top: 10px;
    font-weight: bold;
`;
