import {
    AddRounded,
    MyLocationRounded,
    RemoveRounded,
} from "@mui/icons-material";
import { Button, Grid } from "@mui/material";

interface Props {
    zoomIn: () => void;
    zoomOut: () => void;
    center: () => void;
}

const StyledMapControls = ({ zoomIn, zoomOut, center }: Props) => {
    return (
        <Grid
            container
            position={"absolute"}
            bottom={18}
            right={18}
            zIndex={1}
            width={"auto"}
        >
            <Button sx={{ marginRight: 3, bgcolor: "white" }} onClick={center}>
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

export default StyledMapControls;
