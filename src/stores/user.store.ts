import { action, computed, observable, runInAction } from 'mobx';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ResponseError from '../utils/ReponseError';

export default class UserStore {

    @observable
    userInfo = {};

    @action
    login = async(email, password) => {
        const auth = getAuth();
        const emailFormatted = `${email}@ufes.com`;
        await signInWithEmailAndPassword(auth, emailFormatted, password)
        //.catch((err) => {throw new ResponseError(err)})
        
    };
}