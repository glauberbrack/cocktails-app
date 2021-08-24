import { action, observable } from 'mobx';
import { DrinksApi } from 'src/api';

export default class DrinksStore {
  @observable
  drinks: DrinkDataType[] = [];

  @action
  fetchDrinks = async (): Promise<DrinkDataType[]> => {
    const drinks = await DrinksApi.fetchDrinks();
    this.drinks = drinks.drinks;
  };
}
