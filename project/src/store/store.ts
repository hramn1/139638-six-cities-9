import {configureStore} from '@reduxjs/toolkit';
import {reducer } from './reducers/city-reducer';

export const store = configureStore({reducer });
