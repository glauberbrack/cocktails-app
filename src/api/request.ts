import axios from 'axios';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const request = axios.create({
  baseURL
});

export default request;
