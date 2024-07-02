import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const StyledTypeSelectorBox = ({ children }: Props) => {
    return (
        <Box
            paddingTop={2}
            paddingX={2}
            width={"100%"}
            height={"490px"}
            border={"2px solid #C4C4C4"}
            sx={{ overflow: "hidden", overflowY: "scroll" }}
        >
            {children}
        </Box>
    );
};

export default StyledTypeSelectorBox;
