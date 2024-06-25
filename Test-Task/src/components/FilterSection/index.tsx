import { Grid } from "@mui/material";
import SightTypeSelector from "../SightTypeSelector";
import SearchRadiusSelector from "../SearchRadiusSelector";

const FilterSection = () => {
    return (
        <Grid>
            <SightTypeSelector />
            <SearchRadiusSelector />
        </Grid>
    );
};

export default FilterSection;
