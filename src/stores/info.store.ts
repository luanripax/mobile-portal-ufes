import { async } from '@firebase/util';
import { action, computed, observable, runInAction } from 'mobx';
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

interface CollegiateNewsProps {
    id: number;
    likes: number;
    liked: boolean;
    message: string;
    posted_at: string;
}

export default class InfoStore {

    @observable
    boardNews: BoardProps[] = [];

    @observable
    RuMenu: RuMenuProps[] = [];

    @observable
    collegiateNews: CollegiateNewsProps[] = [];

    @action
    getGeneralInfo = async() => {
        const data = await FireStoreApi.getGeneralInfo();   
        this.boardNews = data.board_news;   
        this.RuMenu = data.ru_menu;
    };

    @action
    getCollegiateNews = async(courseId: number) => {
        const data = await FireStoreApi.getCollegiateNews(courseId);
        this.collegiateNews = data.news;
    }

    @action
    setCollegiateNewLike = (id: number) => {
        runInAction(() => {
            this.collegiateNews[id].liked = false;
            this.collegiateNews[id].likes = 10;
        })
    }

    @action
    getCourseList = async() => {
        const data = await FireStoreApi.getCourseList();
        return data;
    }

    @action
    getDepartmentList = async() => {
        const data = await FireStoreApi.getDepartmentList();
        return data;
    }

}