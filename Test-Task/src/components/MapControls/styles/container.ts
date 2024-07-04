import styled from "styled-components";

import { STYLES } from "@/constants/styleConstants";

export const ControlsContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 18px;
    right: 18px;
    z-index: 1;
    width: auto;
    align-items: center;
`;

export const ZoomControls = styled.div`
    background-color: ${STYLES.WHITE_COLOR};
    ${STYLES.BORDER_RADIUS}
    ${STYLES.DEFAULT_BORDER}
    overflow: hidden;
    padding: 5px 5px;
`;
