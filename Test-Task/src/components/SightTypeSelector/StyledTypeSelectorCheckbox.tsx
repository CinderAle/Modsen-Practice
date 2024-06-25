import { Checkbox, FormControlLabel, Icon } from "@mui/material";
import { useState } from "react";

interface Props {
    iconName: string;
    onSelect: () => void;
    onRemove: () => void;
    isChecked?: boolean;
}

const StyledTypeSelectorCheckbox = ({
    iconName,
    onSelect,
    onRemove,
    isChecked = false,
}: Props) => {
    const [checkedState, setCheckedState] = useState(isChecked);

    const changeCombobox = () => {
        setCheckedState(!checkedState);
        if (checkedState) {
            onRemove();
        } else {
            onSelect();
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
                                src={`/places/${iconName
                                    .toString()
                                    .toLowerCase()}.svg`}
                            />
                        </Icon>
                    }
                />
            }
            label={iconName}
        />
    );
};

export default StyledTypeSelectorCheckbox;
