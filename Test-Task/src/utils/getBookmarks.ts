import { get, ref } from "firebase/database";
import { database } from "./firebaseConfig";
import { constants } from "@/constants/constants";
import { Sight } from "@/types/sight";

export const getBookmarks = async (login: string) => {
    let bookmarkRef = ref(
        database,
        `${constants.USER_COLLECTION}/${login}/${constants.BOOKMARK_COLLECTION}`,
    );
    const snapshot = await get(bookmarkRef);
    if (snapshot.exists()) {
        return Object.values(
            Object.values(snapshot.val())[0] as object,
        )[0] as Array<Sight>;
    } else {
        return [];
    }
};
