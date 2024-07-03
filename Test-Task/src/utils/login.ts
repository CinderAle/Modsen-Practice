import { get, ref } from "firebase/database";
import { database } from "./firebaseConfig";
import { constants } from "@/constants/constants";
import md5 from "md5";

export const loginUser = async (login: string, password: string) => {
    const userRef = ref(database, `${constants.USER_COLLECTION}/${login}`);
    const snapshot = await get(userRef);
    const hash = Object.values(
        Object.values(snapshot.val())[0] as object,
    )[0] as string;
    return snapshot.exists() && hash == md5(password);
};
