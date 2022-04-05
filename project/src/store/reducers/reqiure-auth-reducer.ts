import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {requireAuthorization, setUserName} from '../actions';

const initialState: {
  authorizationStatus: string,
  userName: string
} = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: '',
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    });
});
export  {reducer};
