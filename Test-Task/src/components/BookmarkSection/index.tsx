import { useTypedSelector } from "@/hooks/useTypedSelector";
import BookmarkItem from "../BookmarkItem";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Sight } from "@/types/sight";
import { getBookmarks } from "@/utils/getBookmarks";

const BookmarkSection = () => {
    const userLogin = useTypedSelector((state) => state.user.user.login);
    const isLoggedIn = useTypedSelector((state) => state.user.user.isLoggedIn);
    const [bookmarks, setBookmarks] = useState<Sight[]>([]);

    useEffect(() => {
        getBookmarks(userLogin).then((newBookmarks) => {
            setBookmarks(newBookmarks);
        });
    });

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
