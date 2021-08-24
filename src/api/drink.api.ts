import request from './request';

export const fetchDrinks = async (): Promise<DrinkDataType[]> => {
  try {
    const response = await request.get('filter.php?a=Alcoholic');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
