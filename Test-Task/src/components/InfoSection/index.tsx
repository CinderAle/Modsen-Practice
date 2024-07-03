import { Box, Button, Grid, Icon, Typography } from "@mui/material";

import { useAction } from "@/hooks/useAction";
import { Sight } from "@/types/sight";
import { SightTypes } from "@/types/sightTypes";
import getAllSightTypesFromAllTypes from "@/utils/getAllSightTypesFromAllTypes";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { addBookmark } from "@/utils/addBookmark";
import { removeBookmark } from "@/utils/removeBookmark";
import { getBookmarks } from "@/utils/getBookmarks";

interface Props {
    info: Sight;
}

const InfoSection = ({ info }: Props) => {
    const icons =
        info.types !== undefined
            ? getAllSightTypesFromAllTypes(info.types).map((type) =>
                  SightTypes[type].toLowerCase(),
              )
            : [];

    const { setRouteEnd, setUserBookmarks } = useAction();
    const userLogin = useTypedSelector((state) => state.user.user.login);
    const bookmarks = useTypedSelector((state) => state.user.user.bookmarks);

    const isInBookmarks = (place: Sight): boolean => {
        return (
            bookmarks.filter((bookmark) => bookmark.id === place.id).length > 0
        );
    };

    const setCoordinatesForRoute = () => {
        setRouteEnd(info.coordinates);
    };

    const updateUserBookmarks = () => {
        getBookmarks(userLogin).then((newBookmarks) => {
            setUserBookmarks(newBookmarks);
        });
    };

    const removeFromBookmarks = () => {
        removeBookmark(userLogin, info);
        updateUserBookmarks();
    };

    const saveToBookmarks = () => {
        addBookmark(userLogin, info);
        updateUserBookmarks();
    };

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
                {isInBookmarks(info) ? (
                    <Button onClick={removeFromBookmarks}>В закладках</Button>
                ) : (
                    <Button onClick={saveToBookmarks}>Сохранить</Button>
                )}
                <Button onClick={setCoordinatesForRoute}>Маршрут</Button>
            </Grid>
        </Box>
    );
};

export default InfoSection;
