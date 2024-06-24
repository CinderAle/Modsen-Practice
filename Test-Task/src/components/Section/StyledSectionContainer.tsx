import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StyledSectionContainer = ({ children }: Props) => {
  return (
    <Grid container alignItems={"center"} height={"100%"}>
      {children}
    </Grid>
  );
};

export default StyledSectionContainer;
