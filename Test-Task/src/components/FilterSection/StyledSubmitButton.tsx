import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";

const StyledSubmitButton = () => {
    return (
        <Button type="submit" fullWidth sx={{ bgcolor: "#5E7BC7" }}>
            <Search sx={{ color: "white", fontSize: 30 }} />
        </Button>
    );
};

export default StyledSubmitButton;
