
import ResponseError from "../../utils/ReponseError";
import { collection, query, where, getFirestore,getDocs } from "firebase/firestore";
export const getUserInfo = async (userName: string) => {
    try {
        const db = getFirestore();
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", userName));
        const result = await getDocs(q);
        return result.docs[0].data();
    } catch (error) {
      throw new ResponseError(error);
    }
};