import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 100%;
    ${STYLES.DEFAULT_BORDER}
    ${STYLES.BORDER_RADIUS}
    padding: 10px;
    margin: 20px 0;
`;

export const ImageNameContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;
