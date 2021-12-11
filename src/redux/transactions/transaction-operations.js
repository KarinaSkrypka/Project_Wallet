import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
  filterTransRequest,
  filterTransSuccess,
  filterTransError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
  // editTransactionsRequest,
  // editTransactionsSuccess,
  // editTransactionsError,
  // deleteTransactionsRequest,
  // deleteTransactionsSuccess,
  // deleteTransactionsError,
} from './transaction-actions';

import { BASE_URL } from '../../assets/constants';

axios.defaults.baseURL = BASE_URL;

// axios.defaults.baseURL = 'https://personal-expenses.herokuapp.com';

// const setToken = token => {
//   if (!axios.defaults.headers.common.Authorization)
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

const getTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());
  try {
    // setToken(token);
    const { data } = await axios.get('/api/transactions');

    console.log('Fetch data', data.data.result);

    dispatch(getTransactionsSuccess(data.data.result));
  } catch (error) {
    dispatch(getTransactionsError(error.message));
  }
};

const addTransactions = transaction => async dispatch => {
  // const transaction = {
  //   type,
  //   category,
  //   money,
  //   date,
  //   comment,
  // };

  dispatch(addTransactionsRequest());
  try {
    console.log('ADDDDD', transaction);
    const { data } = await axios.post('/api/transactions', transaction);

    console.log('Add data', data.data.result);

    dispatch(addTransactionsSuccess(data.data.result));
  } catch (error) {
    dispatch(addTransactionsError(error.message));
  }
};

const filterTransaction = (month, year) => async dispatch => {
  dispatch(filterTransRequest());

  try {
    const { data } = await axios.get(
      `/api/transactions/stats?month=${month}&year=${year}`,
    );

    console.log('Filter data', data.data);

    dispatch(filterTransSuccess(data.data));
  } catch (error) {
    dispatch(filterTransError(error.message));
  }
};

const getStatistics =
  ({ month, year }) =>
  async dispatch => {
    dispatch(getStatisticsRequest());
    try {
      const { data } = await axios.get(
        `api/transactions/statistics?month=${month}&year=${year}`,
      );
      console.log(data.data);

      dispatch(getStatisticsSuccess(data.data));
    } catch (error) {
      dispatch(getStatisticsError(error.message));
    }
  };

/////////////////
// edit/delete

// const editTransactions = transactionId => async dispatch => {
//   dispatch(editTransactionsRequest());
//   try {
//     const { data } = await axios.patch(`/api/transactions/${transactionId}`);
//     dispatch(editTransactionsSuccess(data.data));
//   } catch (error) {
//     dispatch(editTransactionsError(error.message));
//   }
// };

// const deleteTransactions = transactionId => async dispatch => {
//   dispatch(deleteTransactionsRequest());
//   try {
//     const { data } = await axios.delete(`/api/transactions/${transactionId}`);
//     dispatch(deleteTransactionsSuccess(transactionId));
//   } catch (error) {
//     dispatch(deleteTransactionsError(error.message));
//   }
// };

const transactionOperations = {
  getTransactions,
  addTransactions,
  filterTransaction,
  getStatistics,
  // editTransactions,
  // deleteTransactions,
};

export default transactionOperations;
