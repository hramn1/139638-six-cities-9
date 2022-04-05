import { api, store } from './store';
import { createAsyncThunk} from "@reduxjs/toolkit";
import { OffersType, UserData, CommentType, AuthData } from "../types/state";
import {APIRoute, AuthorizationStatus} from '../const';
import {getOffers, getComments, requireAuthorization, loadFavorites, setFavorites, setUserName} from './actions';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchoffers',
  async () => {
    try {
      const { data } = await api.get<OffersType[]>(APIRoute.Offers);
      store.dispatch(getOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
export const fetchCommentsAction = createAsyncThunk(
  'data/comments',
  async (id: number, thunkAPI) => {
    try {
      const { data } = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(getComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  'data/add-review',
  async ({ review, rating, roomId }: NewReview) => {
    Number(rating);
    const comment = review;
    try {
      const { data } = await api.post<CommentType[]>(`${APIRoute.Comments}/${roomId.room}`, { comment, rating });
      store.dispatch(getComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const setFavoritesAction = createAsyncThunk(
  'data/setFavorites',
  async ({ id, isFavor }: {id: number | undefined
      isFavor: boolean | undefined }) => {
    try {
      const { data } = await api.post(`${APIRoute.Favorite}/${id}/${Number(isFavor)}`);
      store.dispatch(setFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk(
  'data/favorites',
  async () => {
    try {
      const { data } = await api.get<OffersType[]>(APIRoute.Favorite);
      store.dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'data/check-auth',

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
  'data/login',
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
  'data/logout',
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
);
