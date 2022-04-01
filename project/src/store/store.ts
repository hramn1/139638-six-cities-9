import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {reducer as cityReducer} from './reducers/city-reducer';
import {reducer as sortReducer} from './reducers/sort-reducer';
import {reducer as chooseOffer} from './reducers/choose-offer-reducer';
import {reducer as getOffers} from './reducers/get-offers';
import {reducer as getComments} from './reducers/get-comments';

import { createAPI } from './../api';

export const api = createAPI();

const reducer = combineReducers({
  cityReducer: cityReducer,
  sortReducer: sortReducer,
  chooseOffer: chooseOffer,
  getOffers: getOffers,
  getComments: getComments,
});

export const store = configureStore({reducer});
