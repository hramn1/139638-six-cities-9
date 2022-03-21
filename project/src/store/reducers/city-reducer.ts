import {Cities} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity} from '../actions';

const initialState = {
  city: Cities.Paris,
}
const reducer  = createReducer(initialState, (builder) => {
  builder
  .addCase(setCity, (state, action) => {
    state.city = action.payload
  })
})
export  {reducer };
