import {createReducer} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus} from '../../const';
import {loadFavorites} from '../actions';
import {TypeState} from '../../types/state';

const initialState: Pick<TypeState,  'offersFavor'> = {
  offersFavor: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavorites, (state, action) => {
      state.offersFavor = action.payload;
    });
});
export  {reducer};
