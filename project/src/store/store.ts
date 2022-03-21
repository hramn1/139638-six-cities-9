import {configureStore} from '@reduxjs/toolkit';
import {setCityReducer} from './reducers/city-reducer';

export const store = configureStore({setCityReducer});
