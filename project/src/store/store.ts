import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {reducer as cityReducer} from './reducers/city-reducer';
import {reducer as sortReducer} from './reducers/sort-reducer';

const reducer = combineReducers({
  cityReducer: cityReducer,
  sortReducer: sortReducer,
});

export const store = configureStore({reducer});
