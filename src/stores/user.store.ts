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

    @observable
    hasToken = false;

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

    setToken = async () => {
       await AuthApi.setUserToken(this.userName);
    }

    clearToken = async() => {
        await AuthApi.clearToken();
    }

    @action
    getHasToken = async () => {
        const response = await AuthApi.hasValidToken();
        if(response.result)
            this.userName = response.username;
            this.hasToken = true;
        return response.result;
    }

    getUserCourseSubjects = async() => {
        const {course} = this.userInfo;
        const data = await FireStoreApi.getUserCourseSubjects(course.code);
        return data;
    }

    getRequestedDocumentURL = async(document: string) => {
        const data = await CloudStorageApi.getDocumentURL(this.userName, document);
        return data;
    };

}