import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const InfoContainer = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    max-height: 100%;
    margin-top: 20px;
    padding: 10px;
    ${STYLES.DEFAULT_BORDER}
    ${STYLES.BORDER_RADIUS}
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
`;
