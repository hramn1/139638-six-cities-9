import {createReducer} from '@reduxjs/toolkit';
import {TypeState} from '../../types/state';
import {chooseOffer} from '../actions';

const initialState: Pick<TypeState, 'chooseOffer'> = {
  chooseOffer: 0,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseOffer, (state, action) => {
      state.chooseOffer = action.payload;
    });
});
export  {reducer};
