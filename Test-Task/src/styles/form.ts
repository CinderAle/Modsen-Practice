import styled from "styled-components";

import { STYLES } from "@/constants/styleConstants";

export const AuthForm = styled.form`
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 10px;
    width: 450px;
    background-color: ${STYLES.WHITE_COLOR};
    ${STYLES.BORDER_RADIUS}
`;
