import {createReducer} from '@reduxjs/toolkit';
import {TypeState} from '../../types/state';
import {getComments} from '../actions';

const initialState = {
	isLoading: true,
	comments: []
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
			state.isLoading = false;
    });
});
export  {reducer};
