import { useAction } from "@/hooks/useAction";
import {
  AddRounded,
  MyLocationRounded,
  RemoveRounded,
} from "@mui/icons-material";
import { Button, Grid } from "@mui/material";

const index = () => {
  const { zoomIn, zoomOut } = useAction();
  return (
    <Grid
      container
      position={"absolute"}
      bottom={18}
      right={18}
      zIndex={1}
      width={"auto"}
    >
      <Button sx={{ marginRight: 3, bgcolor: "white" }}>
        <MyLocationRounded />
      </Button>
      <Grid>
        <Button sx={{ bgcolor: "white" }} onClick={zoomIn}>
          <AddRounded />
        </Button>
        <Button sx={{ bgcolor: "white" }} onClick={zoomOut}>
          <RemoveRounded />
        </Button>
      </Grid>
    </Grid>
  );
};

export default index;
