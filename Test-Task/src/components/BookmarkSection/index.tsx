import { useTypedSelector } from "@/hooks/useTypedSelector";
import BookmarkItem from "../BookmarkItem";
import { Typography } from "@mui/material";

const BookmarkSection = () => {
    const bookmarks = useTypedSelector((state) => state.user.user.bookmarks);
    const isLoggedIn = useTypedSelector((state) => state.user.user.isLoggedIn);

    return isLoggedIn ? (
        <>
            {bookmarks.map((bookmark) => (
                <BookmarkItem key={bookmark.id} place={bookmark} />
            ))}
        </>
    ) : (
        <Typography variant="h4">Log in to see</Typography>
    );
};

export default BookmarkSection;
