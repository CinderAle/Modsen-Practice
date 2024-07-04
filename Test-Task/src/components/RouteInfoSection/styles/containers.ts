import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const RouteInfoContainer = styled.div`
    display: flex;
    background-color: ${STYLES.WHITE_COLOR};
    ${STYLES.BORDER_RADIUS}
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 18px;
    align-self: flex-end;
`;

export const RouteDataContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const DistanceContainer = styled.div``;

export const TimeContainer = styled.div`
    margin-left: 40px;
`;
