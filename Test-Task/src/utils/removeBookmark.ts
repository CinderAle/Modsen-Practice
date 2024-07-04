import { get, ref, set } from "firebase/database";

import { constants } from "@/constants/constants";
import { Sight } from "@/types/sight";

import { database } from "./firebaseConfig";

export const removeBookmark = async (login: string, sight: Sight) => {
    const bookmarkRef = ref(
        database,
        `${constants.USER_COLLECTION}/${login}/${constants.BOOKMARK_COLLECTION}`,
    );
    const snapshot = await get(bookmarkRef);
    if (snapshot.exists()) {
        let bookmarks: Sight[] = Object.values(
            Object.values(snapshot.val())[0] as object,
        ) as Array<Sight>;
        console.log(bookmarks);
        bookmarks = bookmarks.filter((bookmark) => bookmark.id !== sight.id);
        set(bookmarkRef, { bookmarks: bookmarks });
        return true;
    } else {
        return false;
    }
};
