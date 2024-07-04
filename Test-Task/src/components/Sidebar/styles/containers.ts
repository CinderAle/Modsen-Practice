import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const SidebarControlsContainer = styled.div`
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    margin-top: 18px;
`;

export const SidebarContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 140px;
    height: 100%;
    padding: 36px 30px;
    background-color: ${STYLES.WHITE_COLOR};
    flex-direction: column;
`;