import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Sight } from "@/types/sight";
import { removeBookmark } from "@/utils/removeBookmark";
import { Button, Grid, Typography } from "@mui/material";

type Props = {
    place: Sight;
};

const BookmarkItem = ({ place }: Props) => {
    const login = useTypedSelector((state) => state.user.user.login);
    const { showSightInfo } = useAction();

    const remove = () => {
        removeBookmark(login, place);
    };

    const show = () => {
        showSightInfo(place);
    };

    return (
        <Grid container>
            <img src={place.photo} />
            <Typography variant="h6">{place.title}</Typography>
            <Button onClick={remove}>Remove</Button>
            <Button onClick={show}>Open</Button>
        </Grid>
    );
};

export default BookmarkItem;
