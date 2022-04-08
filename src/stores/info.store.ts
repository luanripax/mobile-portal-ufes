import { action, computed, observable, runInAction } from 'mobx';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ResponseError from '../utils/ReponseError';
import * as AuthApi from '../api/auth/auth.api';
import * as FireStoreApi from '../api/firestore/firestore.api';

interface BoardProps {
    id: number;
    new: string;
}[];

interface RuMenuProps {
    id: number;
    code: string;
    label: string;
    content: string;
}[];

export default class InfoStore {

    @observable
    boardNews: BoardProps[] = [];

    @observable
    RuMenu: RuMenuProps[] = [];

    @action
    getGeneralInfo = async() => {
        const data = await FireStoreApi.getGeneralInfo();   
        this.boardNews = data.board_news;   
        this.RuMenu = data.ru_menu;
    };
}