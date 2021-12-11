import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  getUserByGoogleAuthRequest,
  getUserByGoogleAuthSuccess,
  getUserByGoogleAuthError,
} from './auth-actions';

import { toast } from 'react-toastify';

import { BASE_URL } from '../../assets/constants';

axios.defaults.baseURL = BASE_URL;

// axios.defaults.baseURL = 'https://personal-expenses.herokuapp.com';
// axios.defaults.baseURL = 'https://nameless-reef-47827.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3000';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { email, password, name }
 */

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/api/users/signup', credentials);

    console.log(credentials);

    if (data) {
      toast.success('Thank you for signing up!');
    }
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));

    if (error.response.status === 400) {
      return toast.error('User creation error! Try signup again.');
    }

    if (error.response.status === 409) {
      return toast.error('User has already created');
    }

    if (error.response.status === 500) {
      return toast.error('Server error! Try signup again later.');
    }
    return toast.error('Something went wrong! Try signup again.');
  }
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    // console.log('Login Credentials', credentials);

    const { data } = await axios.post('/api/users/login', credentials);

    // console.log('Token login', data.data.token);
    // console.log('Data login', data.data);

    token.set(data.data.token);

    if (data.data) {
      toast.success('Welcome to Wallet!');
    }

    dispatch(loginSuccess(data.data));
  } catch (error) {
    dispatch(loginError(error));

    if (error.response.status === 400) {
      return toast.error('Error! Try log in again.');
    }

    if (error.response.status === 401) {
      return toast.error('Error! Try sign up');
    }

    return toast.error('Something went wrong! Try login again.');
  }
};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */

const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/api/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));

    if (error.response.status === 401) {
      return toast.error('Something went wrong! Please reload the page!');
    }

    if (error.response.status === 500) {
      return toast.error('Server error! Try logout again.');
    }

    return toast.error('Something went wrong! Try logout again.');
  }
};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

const fetchCurrentUser = () => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return;
  }

  token.set(persistedToken);

  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await axios.get('/api/users/current');

    dispatch(fetchCurrentUserSuccess(data));
  } catch (error) {
    dispatch(fetchCurrentUserError(error.message));
    // token.unset();
    if (error.response.status === 401) {
      return toast.error(
        'Missing authorization! Please try to login or signup.',
      );
    }

    return toast.error('Something went wrong! Try again later.');
  }
};

const getUserByGoogleAuth = token => async dispatch => {
  dispatch(getUserByGoogleAuthRequest());

  try {
    const {
      data: { data },
    } = await axios.get('/users/google-user', token);
    dispatch(getUserByGoogleAuthSuccess(data));

    toast.success('Welcome to Wallet!');
    token.set(data.token);

    return data;
  } catch (error) {
    dispatch(getUserByGoogleAuthError(error.message));
  }
};

// Transactions

// const addTransactions = transaction => async dispatch => {
//   dispatch(addTransRequest());
//   try {
//     const { data } = await axios.post('/api/transactions', transaction);

//     console.log('Add data', data.transaction);

//     dispatch(addTransSuccess(data.transaction));
//   } catch (error) {
//     dispatch(addTransError(error.message));
//   }
// };

// const getTransactions = () => async dispatch => {
//   dispatch(getTransRequest());
//   try {
//     const { data } = await axios.get('/api/transactions');

//     console.log('Fetch data', data);

//     dispatch(getTransSuccess(data.data.result));
//   } catch (error) {
//     dispatch(getTransError(error.message));
//   }
// };

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  getUserByGoogleAuth,
  // addTransactions,
  // getTransactions,
};

export default authOperations;
