import {store} from '../store/store';

export type TypeState = {
  cityState: string | null,
  sortState: string | null,
  chooseOffer: number | null
}

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
export type OffersType = {
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
  id: number,
}[]
export interface CityName extends OffersType   {
  cityMap: string | null,
}
