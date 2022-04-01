import { api, store } from './store';
import { createAsyncThunk, createAction  } from "@reduxjs/toolkit";
import { OffersType } from "../types/state";
import {APIRoute} from '../const';
import {getOffers, getComments} from './actions';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchoffers',
  async () => {
    try {
      const { data } = await api.get<OffersType>(APIRoute.Offers);
      store.dispatch(getOffers(data));
    } catch (error) {

    }
  },
);
export const fetchCommentsAction = createAsyncThunk(
  'data/comments',
  async (id: number, thunkAPI) => {
    try {
      const { data } = await api.get<OffersType>(`${APIRoute.Comments}/${id}`);
      store.dispatch(getComments(data));
    } catch (error) {

    }
  },
);
