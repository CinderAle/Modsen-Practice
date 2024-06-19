import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <Box position={"absolute"} left={0} height={"100%"} zIndex={1}>
      {children}
    </Box>
  );
};

export default index;
