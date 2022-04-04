import {createReducer} from '@reduxjs/toolkit';
import {getOffers} from '../actions';
import {TypeState} from '../../types/state';

const initialState: Pick<TypeState, 'isLoading' | 'offers'>= {
	isLoading: true,
	offers: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
			state.isLoading = false;
    });
});
export  {reducer};
