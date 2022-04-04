import {createReducer} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus} from '../../const';
import {setFavorites} from '../actions';

const initialState = {
  offersFavor: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavorites, (state, action) => {
      state.offersFavor = action.payload
    });
});
export  {reducer};
