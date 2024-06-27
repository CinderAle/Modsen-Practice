import { Sight } from "@/types/Sight";
import { SightTypes } from "@/types/SightTypes";
import getAllSightTypesFromAllTypes from "@/utils/getAllSightTypesFromAllTypes";
import { Box, Button, Grid, Icon, Typography } from "@mui/material";

interface Props {
    info: Sight;
}

const InfoSection = ({ info }: Props) => {
    let icons =
        info.types !== undefined
            ? getAllSightTypesFromAllTypes(info.types).map((type) =>
                  SightTypes[type].toLowerCase(),
              )
            : [];
    return (
        <Box sx={{ overflow: "hidden" }}>
            <img width="100%" height={"300px"} src={info.photo} />
            {icons.map((icon) => (
                <Icon sx={{ height: "40px", width: "40px" }}>
                    <img width={"100%"} src={`/places/${icon}.svg`} />
                </Icon>
            ))}
            <Typography variant="h3">{info.title}</Typography>
            <Typography variant="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                iusto, reprehenderit commodi libero nostrum voluptatum quas
                voluptatibus possimus qui odit eos et est pariatur odio
                consectetur error? Eos, reiciendis delectus?
            </Typography>
            <Grid container width={"100%"} justifyContent={"space-between"}>
                <Button>Сохранить</Button>
                <Button>Маршрут</Button>
            </Grid>
        </Box>
    );
};

export default InfoSection;
