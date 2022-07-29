import UserStore from './user.store';
import InfoStore from './info.store';
class RootStore {
  user: UserStore;

  info: InfoStore;


  constructor() {
    this.user = new UserStore();
    this.info = new InfoStore();
  }
}

const store = new RootStore();

export { RootStore, UserStore, InfoStore };

export default store;
