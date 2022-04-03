import {createReducer} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus} from '../../const';
import {requireAuthorization} from '../actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: '',
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
export  {reducer};
