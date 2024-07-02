import { SightTypes } from "@/types/sightTypes";
import { Checkbox, FormControlLabel, Icon } from "@mui/material";
import { useState } from "react";

interface Props {
    value: SightTypes;
    onSelect: (value: SightTypes) => void;
    onRemove: (value: SightTypes) => void;
    isChecked?: boolean;
}

const StyledTypeSelectorCheckbox = ({
    value,
    onSelect,
    onRemove,
    isChecked = false,
}: Props) => {
    const [checkedState, setCheckedState] = useState(isChecked);

    const changeCombobox = () => {
        setCheckedState(!checkedState);
        if (checkedState) {
            onRemove(value);
        } else {
            onSelect(value);
        }
    };

    return (
        <FormControlLabel
            sx={{ width: "100%" }}
            control={
                <Checkbox
                    onChange={changeCombobox}
                    checked={checkedState}
                    sx={{ width: "60px", height: "60px" }}
                    icon={
                        <Icon>
                            <img
                                width={"100%"}
                                src={`/places/${SightTypes[
                                    value
                                ].toLowerCase()}.svg`}
                            />
                        </Icon>
                    }
                />
            }
            label={SightTypes[value]}
        />
    );
};

export default StyledTypeSelectorCheckbox;
