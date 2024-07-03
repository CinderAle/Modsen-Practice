import { Sight } from "@/types/sight";
import { get, push, ref, set } from "firebase/database";
import { database } from "./firebaseConfig";
import { constants } from "@/constants/constants";

export const addBookmark = async (login: string, sight: Sight) => {
    let bookmarkRef = ref(
        database,
        `${constants.USER_COLLECTION}/${login}/${constants.BOOKMARK_COLLECTION}`,
    );
    const snapshot = await get(bookmarkRef);
    let bookmarks;
    if (!snapshot.exists()) {
        bookmarkRef = push(
            ref(
                database,
                `${constants.USER_COLLECTION}/${login}/${constants.BOOKMARK_COLLECTION}`,
            ),
        );
        bookmarks = { bookmarks: [sight] };
    } else {
        let bookmarksSet = new Set(
            Object.values(
                Object.values(snapshot.val())[0] as object,
            )[0] as Array<Sight>,
        );
        bookmarksSet.add(sight);
        bookmarks = { bookmarks: { ...bookmarksSet } };
    }
    set(bookmarkRef, bookmarks);
};
