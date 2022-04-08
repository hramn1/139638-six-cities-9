import {createReducer} from '@reduxjs/toolkit';
import {TypeState} from '../../types/state';
import {getComments} from '../actions';
const initialState: Pick<TypeState, 'isLoading' | 'comments' | 'isSuccess'>= {
  isLoading: true,
  comments: [],
  isSuccess: false,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
});
export  {reducer};
