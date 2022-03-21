import {City} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
const initialState = {
  city: City.Paris
}
export const setCityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step = state.step + STEP_COUNT;
    });
})
