import { api, store } from './store';
import { createAsyncThunk, createAction  } from "@reduxjs/toolkit";
import { OffersType } from "../types/state";
import {APIRoute, AuthorizationStatus} from '../const';
import {getOffers, getComments} from './actions';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { loadOffers, loadRoom, loadOffersNearby, loadReviews, loadFavorites, setFavorites } from './data-process/data-process';
import { requireAuthorization, setUserName } from './user-process/user-process';

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

export const addReviewAction = createAsyncThunk(
  ADD_REVIEW_ACTION,
  async ({ comment, rating, roomId }: NewReview) => {
    try {
      const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${roomId}`, { comment, rating });
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const setFavoritesAction = createAsyncThunk(
  SET_FAVORITES_ACTION,
  async ({ id, isFavorite }: Offer) => {
    try {
      const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${Number(isFavorite)}`);
      store.dispatch(setFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk(
  FETCH_FAVORITES_ACTION,
  async () => {
    try {
      const { data } = await api.get<Offer[]>(APIRoute.Favorite);
      store.dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  CHECK_AUTH,
  async () => {
    try {
      const { data: { email } } = await api.get<UserData>(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserName(email));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  USER_LOGIN,
  async ({ email, password }: AuthData) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserName(email));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  USER_LOGOUT,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(setUserName(''));
    } catch (error) {
      errorHandle(error);
    }
  },
