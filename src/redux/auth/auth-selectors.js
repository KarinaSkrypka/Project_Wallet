import { createSelector } from '@reduxjs/toolkit';

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getIsRegistered = state => state.auth.isRegistered;

// const getCategories = state => state.auth.user;

const getTransactionsUser = state => state.auth.user.transactions;

const getTransactionsAuth = state => state.auth.transactions;
const getBalance = state => state.auth.user.balance;

// const formatSum = sum => {
//   if (!String(sum).includes('.')) {
//     const num = Number(sum);
//     return num.toFixed(2);
//   }
// };

// const getTransactionAuthBalance = state => {
//   const arrTransactionsAuth = getTransactionsAuth(state);
//   const arr = Array.from(arrTransactionsAuth);
//   const arrBalances = arr.map(({ balance }) => balance);
//   const transactionBalance = arrBalances[arrBalances.length - 1];
//   return transactionBalance;
// };

const getTransactionAuthBalance = createSelector(
  [getTransactionsAuth],
  transactions => {
    const arr = Array.from(transactions);
    const arrBalances = arr.map(({ balance }) => balance);
    const transactionBalance = arrBalances[arrBalances.length - 1];
    return transactionBalance;
  },
);

const getArrTransactionAuthBalance = state => {
  const arrTransactionsAuth = getTransactionsAuth(state);
  const arr = Array.from(arrTransactionsAuth);
  const arrBalances = arr.map(({ balance }) => balance);
  return arrBalances;
};

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getLoading,
  getError,
  getToken,
  getIsRegistered,
  getTransactionsUser,
  getTransactionsAuth,
  getTransactionAuthBalance,
  getArrTransactionAuthBalance,
  getBalance,
  // addTransactionsUser,
  // getCategories,
};
export default authSelectors;
