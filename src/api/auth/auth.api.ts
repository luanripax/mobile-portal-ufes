
import ResponseError from "../../utils/ReponseError";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const login = async (email, password): Promise<void> => {
    try {
        const auth = getAuth();
        const emailFormatted = `${email}@ufes.com`;
        await signInWithEmailAndPassword(auth, emailFormatted, password)
    } catch (error) {
      throw new ResponseError(error);
    }
  };