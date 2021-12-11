import { createAction } from '@reduxjs/toolkit';

// signup
export const registerRequest = createAction('register/registerRequest');
export const registerSuccess = createAction('register/registerSuccess');
export const registerError = createAction('register/registerError');

// login
export const loginRequest = createAction('login/loginRequest');
export const loginSuccess = createAction('login/loginSuccess');
export const loginError = createAction('login/loginError');

// logout
export const logoutRequest = createAction('logout/logoutRequest');
export const logoutSuccess = createAction('logout/logoutSuccess');
export const logoutError = createAction('logout/logoutError');

// currentUser
export const fetchCurrentUserRequest = createAction(
  'auth/fetchCurrentUserRequest',
);
export const fetchCurrentUserSuccess = createAction(
  'auth/fetchCurrentUserSuccess',
);
export const fetchCurrentUserError = createAction('auth/fetchCurrentUserError');

// googleAuth
export const getUserByGoogleAuthRequest = createAction(
  'auth/getUserByGoogleAuthRequest',
);
export const getUserByGoogleAuthSuccess = createAction(
  'auth/getUserByGoogleAuthSuccess',
);
export const getUserByGoogleAuthError = createAction(
  'auth/getUserByGoogleAuthError',
);

// getTransactions
// export const getTransactionsRequest = createAction('auth/getTransactionsRequest');
// export const getTransactionsSuccess = createAction('auth/getTransactionsSuccess');
// export const getTransactionsError = createAction('auth/getTransactionsError');
