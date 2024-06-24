import { Box, TextField } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StyledSectionContentBox = ({ children }: Props) => {
  return (
    <Box
      width={"490px"}
      height={"100%"}
      bgcolor={"white"}
      borderLeft={"2px solid #C4C4C4"}
      padding={5}
    >
      <TextField fullWidth variant="outlined" />
      {children}
    </Box>
  );
};

export default StyledSectionContentBox;
