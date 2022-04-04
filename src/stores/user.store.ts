import { action, computed, observable, runInAction } from 'mobx';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ResponseError from '../utils/ReponseError';
import * as AuthApi from '../api/auth/auth.api';

export default class UserStore {

    @observable
    userInfo = {};

    @action
    login = async(email, password) => {
        await AuthApi.login(email, password);        
    };
}