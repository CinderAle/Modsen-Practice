import { useState } from "react";

import { SightTypes } from "@/types/sightTypes";

import {
    CheckedText,
    TypeCheckBox,
    TypeIcon,
    UncheckedText,
} from "./styles/checkbox";

interface Props {
    value: SightTypes;
    onSelect: (value: SightTypes) => void;
    onRemove: (value: SightTypes) => void;
    isChecked?: boolean;
}

const TypeSelectorCheckbox = ({
    value,
    onSelect,
    onRemove,
    isChecked = false,
}: Props) => {
    const [checkedState, setCheckedState] = useState(isChecked);
    const label = SightTypes[value];
    const changeCombobox = () => {
        setCheckedState(!checkedState);
        if (checkedState) {
            onRemove(value);
        } else {
            onSelect(value);
        }
    };

    return (
        <TypeCheckBox onClick={changeCombobox}>
            <TypeIcon src={`/places/${SightTypes[value].toLowerCase()}.svg`} />
            {checkedState ? (
                <CheckedText>{label}</CheckedText>
            ) : (
                <UncheckedText>{label}</UncheckedText>
            )}
        </TypeCheckBox>
    );
};

export default TypeSelectorCheckbox;
