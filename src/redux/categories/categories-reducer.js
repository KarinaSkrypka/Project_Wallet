import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from './categories-actions';

const categories = createReducer([], {
  [getCategoriesSuccess]: (_, { payload }) => payload.data.categories,
});

const isLoading = createReducer(false, {
  [getCategoriesRequest]: () => true,
  [getCategoriesSuccess]: () => false,
  [getCategoriesError]: () => false,
});

const error = createReducer(null, {
  [getCategoriesRequest]: () => null,
  [getCategoriesError]: (_, { payload }) => payload,
});

export default combineReducers({
  categories,
  isLoading,
  error,
});
