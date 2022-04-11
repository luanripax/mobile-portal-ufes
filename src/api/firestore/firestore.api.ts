
import ResponseError from "../../utils/ReponseError";
import { collection, query, where, getFirestore,getDocs } from "firebase/firestore";

export const getUserInfo = async (userName: string) => {
  try {
      const db = getFirestore();
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", userName));
      const result = await getDocs(q);
      return result.docs.shift().data();
  } catch (error) {
    throw new ResponseError(error);
  }
};

export const getGeneralInfo = async () => {
  try {
      const db = getFirestore();
      const usersRef = collection(db, "general_info");
      const q = query(usersRef);
      const result = await getDocs(q);
      return result.docs.shift().data();
  } catch (error) {
    throw new ResponseError(error);
  }
};

export const getCollegiateNews = async (courseId: number) => {
  try {
    const db = getFirestore();
    const usersRef = collection(db, "collegiate_news");
    const q = query(usersRef, where("course_id", "==", courseId));
    const result = await getDocs(q);
    return result.docs.shift().data();
  } catch(error) {
    throw new ResponseError(error);
  }
}