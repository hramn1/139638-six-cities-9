import {Cities} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity} from '../actions';
import {TypeState} from '../../types/state';
const initialState: Pick<TypeState, 'cityState'> = {
  cityState: Cities.Paris,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.cityState = action.payload;
    });
});
export  {reducer};
