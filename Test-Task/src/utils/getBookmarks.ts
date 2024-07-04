import { get, ref } from "firebase/database";

import { constants } from "@/constants/constants";
import { Sight } from "@/types/sight";

import { database } from "./firebaseConfig";

export const getBookmarks = async (login: string) => {
    const bookmarkRef = ref(
        database,
        `${constants.USER_COLLECTION}/${login}/${constants.BOOKMARK_COLLECTION}`,
    );
    const snapshot = await get(bookmarkRef);
    if (snapshot.exists()) {
        return Object.values(
            Object.values(snapshot.val())[0] as object,
        ) as Array<Sight>;
    } else {
        return [];
    }
};
