import { Sight } from "@/types/sight";
import { Box, Typography } from "@mui/material";

type Props = {
    place: Sight;
};

const BookmarkItem = ({ place }: Props) => {
    return (
        <Box>
            <img src={place.photo} />
            <Typography variant="h6">{place.title}</Typography>
        </Box>
    );
};

export default BookmarkItem;
