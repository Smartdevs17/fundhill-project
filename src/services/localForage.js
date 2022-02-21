import AppStorage from "localforage";

const AppStore = AppStorage.createInstance({
  name: "Fund_Hill",
  storeName: "fund_hill_db",
  version: 1.0,
  size: 4980736,
  description: "FundHill Local Database",
  driver: [
    AppStorage.INDEXEDDB,
    AppStorage.LOCALSTORAGE,
    AppStorage.WEBSQL
  ],
});

class Store {

  getItem = AppStore.getItem;
  setItem = AppStore.setItem;
  clearStore = AppStore.clear;
  removeItem = AppStore.removeItem;

  getFromStore(key) {
    this.getItem(key).then((payload) => {
      return payload;
    }).catch((err) => {
      console.error('Error getting item: ', err);
      return null;
    })
  }

  pushToStore(key, data) {
    this.setItem(key, data).then((payload) => {
      console.log('payload:', payload);
      return true;
    }).catch((err) => {
      console.error('Error pushing item: ', err);
      return false;
    })
  }

  deleteFromStore(key) {
    this.removeItem(key).then(() => {
      return true;
    }).catch((err) => {
      console.error('Error deleting item: ', err);
      return false;
    })
  }


  clearStorage() {
    this.clearStore().then(() => {
      return true;
    }).catch((err) => {
      console.error('Error clearing db: ', err);
      return false;
    })
  }
}


export default Store;
