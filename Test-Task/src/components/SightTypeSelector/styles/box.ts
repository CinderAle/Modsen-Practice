import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const FilterBox = styled.div`
    width: 100%;
    height: 400px;
    ${STYLES.BORDER_RADIUS}
    ${STYLES.DEFAULT_BORDER}
    overflow: hidden;
    overflow-y: scroll;
    padding: 5px 15px;
`;
