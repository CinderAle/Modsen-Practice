import { get, ref, set } from "firebase/database";
import { database } from "./firebaseConfig";
import { constants } from "@/constants/constants";
import { Sight } from "@/types/sight";

export const removeBookmark = async (login: string, sight: Sight) => {
    let bookmarkRef = ref(
        database,
        `${constants.USER_COLLECTION}/${login}/${constants.BOOKMARK_COLLECTION}`,
    );
    const snapshot = await get(bookmarkRef);
    if (snapshot.exists()) {
        let bookmarks = Object.values(
            Object.values(snapshot.val())[0] as object,
        )[0] as Array<Sight>;
        bookmarks = bookmarks.filter((bookmark) => bookmark.id !== sight.id);
        set(bookmarkRef, { bookmarks: bookmarks });
        return true;
    } else {
        return false;
    }
};
