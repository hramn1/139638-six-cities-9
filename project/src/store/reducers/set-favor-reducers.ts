import {createReducer} from '@reduxjs/toolkit';
import {setFavorites} from '../actions';

const initialState: {offersFavor: []} = {
  offersFavor: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavorites, (state, action) => {
      state.offersFavor = action.payload;
    });
});
export  {reducer};
