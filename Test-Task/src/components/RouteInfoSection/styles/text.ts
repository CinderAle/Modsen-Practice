import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const ValueHeading = styled.h2`
    ${STYLES.HEADING_FONT_SIZE};
    color: ${STYLES.ROUTE_BLUE_COLOR};
`;

export const ValueLabel = styled.p`
    color: ${STYLES.UNCHECKED_COLOR};
`;
