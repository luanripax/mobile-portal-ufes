import { action, computed, observable, runInAction } from 'mobx';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ResponseError from '../utils/ReponseError';
import * as AuthApi from '../api/auth/auth.api';
import * as FireStoreApi from '../api/firestore/firestore.api';
import * as CloudStorageApi from '../api/cloudstorage/cloudstorage.api';

export default class UserStore {

    @observable
    userInfo = {};

    @observable
    userName = '';

    @action
    login = async(email:string, password:string) => {
        await AuthApi.login(email, password);  
        this.userName = email;      
    };

    @action
    getUserInfo = async() => {
        const data = await FireStoreApi.getUserInfo(this.userName);   
        this.userInfo = data;
    };

    getUserDocumentURL = async(userName: string, document: string) => {
        const data = await CloudStorageApi.getDocumentURL(userName, document);
        return data;
    };
}