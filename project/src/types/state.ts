import {store} from '../store/store';

export type TypeState = {
  cityState: string | null,
  sortState: string | null,
  chooseOffer: number | null,
  isLoading: boolean,
  isSuccess: boolean,
  offers: OffersType[],
  comments: CommentType[],
  offersFavor: OffersType[],
}
export type NewReview = {
  review: string,
  rating: number,
  roomId: {
    room: number | undefined,
  },
};
export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type UserData = Host & {
  email: string,
  token: string,
};
export type AuthData = {
  email: string,
  password: string,
};
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}
export type Hosts = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
}
export type ErrorType = unknown;
export type OffersType = {
  id: number,
  city: {
    name: string,
    location: Location
  },
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: Hosts,
  description: string,
  location: Location,
}
export interface CityName extends OffersType   {
  cityMap: string | null,
}
export type CommentType = {
  id: number,
  user: {
    id: number,
    isPro: boolean,
    name: string,
    avatarUrl: string,
  },
  rating: number,
  comment: string,
  date: string,
}
