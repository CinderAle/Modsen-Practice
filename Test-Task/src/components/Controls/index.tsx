import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Controls = ({ children }: Props) => {
    return (
        <Grid
            container
            wrap={"nowrap"}
            width={"auto"}
            position={"absolute"}
            left={0}
            height={"100%"}
            zIndex={1}
        >
            {children}
        </Grid>
    );
};

export default Controls;
