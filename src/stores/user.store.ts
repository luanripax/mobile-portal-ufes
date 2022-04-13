import { action, computed, observable, runInAction } from 'mobx';
import * as AuthApi from '../api/auth/auth.api';
import * as FireStoreApi from '../api/firestore/firestore.api';
import * as CloudStorageApi from '../api/cloudstorage/cloudstorage.api';

interface UserInfoProps {
    username: string;
    firstname: string;
    lastName: string;
    ru_balance: number;
    course: CourseProps;
}

interface CourseProps {
    code: number;
    name: string;
}

export default class UserStore {

    @observable
    userInfo = {} as UserInfoProps;

    @observable
    userName = '';

    @observable
    userSubjects = [];

    @action
    login = async(email:string, password:string) => {
        await AuthApi.login(email, password);  
        this.userName = email;      
    };

    @action
    getUserInfo = async() => {
        const data = await FireStoreApi.getUserInfo(this.userName);   
        this.userInfo = data as UserInfoProps;
    };

    @action
    getUserSubjects = async() => {
        const data = await FireStoreApi.getUserSubjects(this.userName);
        this.userSubjects = data.subjects;
    }

    @action
    getRequestedDocumentURL = async(document: string) => {
        const data = await CloudStorageApi.getDocumentURL(this.userName, document);
        return data;
    };
}