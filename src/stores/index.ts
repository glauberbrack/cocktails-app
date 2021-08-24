import DrinksStore from './drink.store';

class RootStore {
  drinks: DrinksStore;

  constructor() {
    this.drinks = new DrinksStore();
  }
}

const store = new RootStore();

export default store;
