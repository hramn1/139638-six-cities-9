import {createAction} from '@reduxjs/toolkit';
import {CommentType, OffersType} from '../types/state';

export const setCity = createAction<string | null>('selectCity');
export const setSorting = createAction<string | null>('selectSort');
export const chooseOffer = createAction<number | null>('chooseOffer');
export const getOffers = createAction<OffersType[]>('getOffers');
export const getComments = createAction<CommentType[]>('getComments');
export const requireAuthorization = createAction<string>('getAuth');
export const loadFavorites = createAction<OffersType[]>('getFavorites');
export const setFavorites = createAction<number | boolean>('setFavorites');
export const setUserName = createAction<string>('setName')
