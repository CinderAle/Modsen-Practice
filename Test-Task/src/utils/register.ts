import { get, push, ref, set } from "firebase/database";
import md5 from "md5";

import { constants } from "@/constants/constants";

import { database } from "./firebaseConfig";

export const registerUser = async (login: string, password: string) => {
    const userRef = ref(database, `${constants.USER_COLLECTION}/${login}`);
    const snapshot = await get(userRef);
    if (!snapshot.exists()) {
        const newUserRef = push(
            ref(database, `${constants.USER_COLLECTION}/${login}`),
        );
        set(newUserRef, {
            password: md5(password),
        });
        return true;
    } else {
        return false;
    }
};
