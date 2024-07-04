import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 420px;
    border-left: 2px solid ${STYLES.UNCHECKED_COLOR};
    background-color: ${STYLES.WHITE_COLOR};
    padding: 35px;
`;

export const AddressInput = styled.input`
    width: 100%;
    padding: 14px;
    ${STYLES.DEFAULT_BORDER}
    ${STYLES.BORDER_RADIUS}
    transition: ${STYLES.TRANSITION_VALUE};
    &:hover {
        border-color: ${STYLES.BLUE_COLOR};
    }
`;

export const MainSection = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
