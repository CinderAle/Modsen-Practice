import { useAction } from "@/hooks/useAction";
import { ArrowLeftRounded } from "@mui/icons-material";
import { Box, Button, Grid, TextField } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const index = ({ children }: Props) => {
  const { hideSection } = useAction();
  return (
    <Grid container alignItems={"center"} height={"100%"}>
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
      <Button
        sx={{
          minWidth: "45px",
          height: "80px",
          bgcolor: "white",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        onClick={hideSection}
      >
        <ArrowLeftRounded sx={{ fontSize: 30, color: "#333" }} />
      </Button>
    </Grid>
  );
};

export default index;
