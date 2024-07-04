import { get, push, ref, set } from "firebase/database";

import { constants } from "@/constants/constants";
import { Sight } from "@/types/sight";

import { database } from "./firebaseConfig";

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
        bookmarks = { bookmarks: sight };
    } else {
        const bookmarksSet = new Set(
            Object.values(
                Object.values(snapshot.val())[0] as object,
            ) as Array<Sight>,
        );
        bookmarksSet.add(sight);
        console.log(bookmarksSet);
        bookmarks = { bookmarks: [...bookmarksSet] };
    }
    set(bookmarkRef, bookmarks);
};
