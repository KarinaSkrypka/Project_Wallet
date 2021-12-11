import axios from 'axios';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from './categories-actions';

import { BASE_URL } from '../../assets/constants';

axios.defaults.baseURL = BASE_URL;

// axios.defaults.baseURL = 'https://personal-expenses.herokuapp.com';

const getCategories = () => async dispatch => {
  dispatch(getCategoriesRequest());
  try {
    const { data } = await axios.get('/api/categories');

    console.log('Categories', data);

    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};

const categoriesOperations = {
  getCategories,
};
export default categoriesOperations;
