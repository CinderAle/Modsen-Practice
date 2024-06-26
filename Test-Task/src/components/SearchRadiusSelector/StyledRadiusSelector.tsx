import { Input, Typography } from "@mui/material";

interface Props {
    onChange: (value: string) => void;
    value: string;
}

const StyledRadiusSelector = ({ onChange, value }: Props) => {
    return (
        <>
            <Typography variant="h3">В радиусе</Typography>
            <Input
                type="number"
                onChange={(e) => {
                    onChange(e.currentTarget.value);
                }}
                value={value}
            />
            <Typography variant="h5">км</Typography>
        </>
    );
};

export default StyledRadiusSelector;
