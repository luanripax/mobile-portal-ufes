
import ResponseError from "../../utils/ReponseError";
import JWT from 'expo-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const login = async (email: string, password: string): Promise<void> => {
  try {
      const auth = getAuth();
      const emailFormatted = `${email.trim()}@ufes.com`;
      await signInWithEmailAndPassword(auth, emailFormatted, password.trim())
  } catch (error) {
    throw new ResponseError(error);
  }
};

export const setUserToken = async(username: string) => {
  try {
    const token = JWT.encode({exp: Date.now(), user: username}, 'secret-mobile-ufes');
    await AsyncStorage.setItem('@storage_token', token);
  } catch (error) {
    throw new ResponseError(error);
  }
}

export const hasValidToken = async() => {
  let result = false;
  try {
    const storedToken = await AsyncStorage.getItem('@storage_token');
    if(!storedToken)
       result = false;

    const token = JWT.decode(storedToken, 'secret-mobile-ufes');
    const expDate = token.exp;
    if((Date.now() - expDate)/60000 < 10) {
      result = true;
    }

    return {result, username: result ? token.user : ''};
  } catch (error) {
    throw new ResponseError(error);
  }
}

export const clearToken = async(username: string) => {
  try {
    const token = JWT.encode({exp: Date.now() - 610000, user: username}, 'secret-mobile-ufes');
    await AsyncStorage.setItem('@storage_token', token);
  } catch (error) {
    throw new ResponseError(error);
  }
}