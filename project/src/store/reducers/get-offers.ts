import {createReducer} from '@reduxjs/toolkit';
import {TypeState} from '../../types/state';
import {getOffers} from '../actions';

const initialState = {
	isLoading: true,
	offers: []
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
			state.isLoading = false;
    });
});
export  {reducer};
