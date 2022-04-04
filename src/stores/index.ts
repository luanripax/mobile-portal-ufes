import UserStore from './user.store';

class RootStore {
  user: UserStore;



  constructor() {
    this.user = new UserStore();
  }
}

const store = new RootStore();


export { RootStore, UserStore };

export default store;
