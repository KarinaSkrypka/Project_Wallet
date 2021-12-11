import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
  // editTransactionsRequest,
  // editTransactionsSuccess,
  // editTransactionsError,
  // deleteTransactionsRequest,
  // deleteTransactionsSuccess,
  // deleteTransactionsError,
  filterTransRequest,
  filterTransSuccess,
  filterTransError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
} from './transaction-actions';

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionsSuccess]: (state, { payload }) => [...state, payload],
  [getStatisticsSuccess]: (_, { payload }) => payload,
  [getTransactionsError]: (_, { payload }) => payload,
  // [editTransactionsSuccess]: (state, { payload }) => [...state, payload],
  // [deleteTransactionsSuccess]: (state, { payload }) => [...state, payload],
});

const filter = createReducer('', {
  [filterTransSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
  [addTransactionsRequest]: () => true,
  [addTransactionsSuccess]: () => false,
  [addTransactionsError]: () => false,
  [filterTransRequest]: () => true,
  [filterTransSuccess]: () => false,
  [filterTransError]: () => false,
  [getStatisticsRequest]: () => true,
  [getStatisticsSuccess]: () => false,
  [getStatisticsError]: () => false,
  // [editTransactionsRequest]: () => true,
  // [editTransactionsSuccess]: () => false,
  // [editTransactionsError]: () => false,
  // [deleteTransactionsRequest]: () => true,
  // [deleteTransactionsSuccess]: () => false,
  // [deleteTransactionsError]: () => false,
});

const error = createReducer(null, {
  [getTransactionsRequest]: () => null,
  [getTransactionsError]: (_, { payload }) => payload,
  [addTransactionsRequest]: () => null,
  [addTransactionsError]: (_, { payload }) => payload,
  [filterTransError]: (_, { payload }) => payload,
  [getStatisticsError]: (_, { payload }) => payload,
  [filterTransRequest]: () => null,
  [getStatisticsRequest]: () => null,
  // [editTransactionsRequest]: () => null,
  // [editTransactionsError]: (_, { payload }) => payload,
  // [deleteTransactionsRequest]: () => null,
  // [deleteTransactionsError]: (_, { payload }) => payload,
});

export default combineReducers({
  result,
  filter,
  loading,
  error,
});
