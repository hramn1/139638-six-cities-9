import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction<string | null>('selectCity');
export const setSorting = createAction<string | null>('selectSort');
export const chooseOffer = createAction<number | null>('chooseOffer');
export const getOffers = createAction<number | null>('getOffers');
export const getComments = createAction<number | null>('getComments');
