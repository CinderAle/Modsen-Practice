import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const StyledSidebarGrid = ({ children }: Props) => {
    return (
        <Grid
            container
            alignItems={"center"}
            wrap="nowrap"
            width={"140px"}
            height={"100%"}
            paddingY={5}
            paddingX={5}
            bgcolor={"#fff"}
            direction={"column"}
        >
            {children}
        </Grid>
    );
};

export default StyledSidebarGrid;
