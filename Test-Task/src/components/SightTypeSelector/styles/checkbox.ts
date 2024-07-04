import { STYLES } from "@/constants/styleConstants";
import styled from "styled-components";

export const TypeCheckBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 2px 0;
    cursor: pointer;
    margin: 10px 0;
`;

export const TypeIcon = styled.img`
    display: block;
    height: 100%;
`;

export const CheckedText = styled.p`
    font-weight: lighter;
    display: inline-block;
    margin: 0 20px;
    padding: 0;
    color: ${STYLES.CHECKED_COLOR};
`;

export const UncheckedText = styled.p`
    font-weight: lighter;
    display: inline-block;
    margin: 0 20px;
    padding: 0;
    color: ${STYLES.UNCHECKED_COLOR};
`;
