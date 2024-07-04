import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const ItemName = styled.h2`
    ${STYLES.HEADING_FONT_SIZE}
    display: inline-block;
    width: 100%;
    padding: 20px;
`;

export const ItemText = styled.p`
    font-size: 12px;
    margin: 10px 0;
`;
