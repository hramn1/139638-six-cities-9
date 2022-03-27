import {createReducer} from '@reduxjs/toolkit';
import {TypeState} from '../../types/state';
import {setSorting} from '../actions';

const initialState: Pick<TypeState, 'sortState'> = {
  sortState: 'Popular',
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSorting, (state, action) => {
      state.sortState = action.payload;
    });
});
export  {reducer};
