import { useTypedSelector } from "@/hooks/useTypedSelector";
import BookmarkItem from "../BookmarkItem";
import { useEffect, useState } from "react";
import { Sight } from "@/types/sight";
import { getBookmarks } from "@/utils/getBookmarks";
import { useAction } from "@/hooks/useAction";
import { Caption } from "./styles/caption";
import { BookmarksContainer } from "./styles/container";

const BookmarkSection = () => {
    const userLogin = useTypedSelector((state) => state.user.user.login);
    const isLoggedIn = useTypedSelector((state) => state.user.user.isLoggedIn);
    const [bookmarks, setBookmarks] = useState<Sight[]>([]);
    const { setUserBookmarks } = useAction();

    useEffect(() => {
        getBookmarks(userLogin).then((newBookmarks) => {
            setUserBookmarks(newBookmarks);
            setBookmarks(newBookmarks);
        });
    });

    return isLoggedIn ? (
        <BookmarksContainer>
            <Caption>Избранное:</Caption>
            {bookmarks.map((bookmark) => (
                <BookmarkItem key={bookmark.id} place={bookmark} />
            ))}
        </BookmarksContainer>
    ) : (
        <Caption>Войдите в аккаунт, чтобы увидеть</Caption>
    );
};

export default BookmarkSection;
