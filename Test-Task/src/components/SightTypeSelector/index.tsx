import {
  Box,
  Checkbox,
  FormControlLabel,
  Icon,
  Typography,
} from "@mui/material";
import { SightTypes } from "../../types/SightTypes";

const SightTypeSelector = () => {
  return (
    <>
      <Typography variant="h3">Искать</Typography>
      <Box
        paddingTop={2}
        paddingX={2}
        width={"100%"}
        height={"490px"}
        border={"2px solid #C4C4C4"}
        sx={{ overflow: "hidden", overflowY: "scroll" }}
      >
        {Object.values(SightTypes)
          .filter((e) => isNaN(Number(e)))
          .map((e) => (
            <FormControlLabel
              sx={{ width: "100%" }}
              control={
                <Checkbox
                  sx={{ width: "60px", height: "60px" }}
                  icon={
                    <Icon>
                      <img
                        width={"100%"}
                        src={`/places/${e.toString().toLowerCase()}.svg`}
                      />
                    </Icon>
                  }
                />
              }
              label={e.toString()}
            />
          ))}
      </Box>
    </>
  );
};

export default SightTypeSelector;
