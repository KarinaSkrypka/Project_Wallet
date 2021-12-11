import { createReducer, combineReducers } from '@reduxjs/toolkit';
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

import {
  addTransactionsSuccess,
  getTransactionsSuccess,
  // editTransactionsSuccess,
  // deleteTransactionsSuccess,
} from '../transactions/transaction-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => ({ name: null, email: null }),
    [fetchCurrentUserSuccess]: (_, { payload }) => payload.user,
    [getUserByGoogleAuthSuccess]: (_, { payload }) => payload.user,
  },
);

const token = createReducer(null, {
  // [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [getUserByGoogleAuthSuccess]: (_, { payload }) => payload.token,
  [getUserByGoogleAuthError]: () => null,
  // [fetchCurrentUserSuccess]: (_, { payload }) => payload.token,
  // [fetchCurrentUserError]: () => null,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => true,
  [fetchCurrentUserSuccess]: () => true,
  [fetchCurrentUserError]: () => false,
  [getUserByGoogleAuthSuccess]: () => true,
  [getUserByGoogleAuthError]: () => false,
});

const isRegistered = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
});

const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [fetchCurrentUserRequest]: () => true,
  [fetchCurrentUserSuccess]: () => false,
  [fetchCurrentUserError]: () => false,
  [getUserByGoogleAuthRequest]: () => true,
  [getUserByGoogleAuthSuccess]: () => false,
  [getUserByGoogleAuthError]: () => false,
  [addTransactionsSuccess]: () => false,
  // [editTransactionsSuccess]: () => false,
  // [deleteTransactionsSuccess]: () => false,
});

const error = createReducer(null, {
  [registerRequest]: () => null,
  [registerError]: (_, { payload }) => payload,
  [loginRequest]: () => null,
  [loginError]: (_, { payload }) => payload,
  [logoutRequest]: () => null,
  [logoutError]: (_, { payload }) => payload,
  [fetchCurrentUserRequest]: () => null,
  [fetchCurrentUserError]: (_, { payload }) => payload,
  [getUserByGoogleAuthRequest]: () => null,
  [getUserByGoogleAuthError]: (_, { payload }) => payload,
});

// const balance = createReducer(0, {
//   [loginSuccess]: (_, { payload }) => payload.data,
//   [addTransactionsSuccess]: (_, { payload }) => payload.data,
//   [fetchCurrentUserSuccess]: (_, { payload }) => payload,

// });

const transactions = createReducer([], {
  [addTransactionsSuccess]: (_, { payload }) => payload,
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [fetchCurrentUserSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  isLoggedIn,
  isRegistered,
  isLoading,
  error,
  // balance,
  transactions,
});
