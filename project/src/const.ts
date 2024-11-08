import {PointExpression} from 'leaflet';

enum Pages {
  Main = '/',
  Login = '/login',
  Favor = '/favorites',
  Room = '/offer/:id'
}

export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}
export enum ReviewVerification {
  Rating = 0,
  MinLength = 50
}
export enum Cities {
  Paris='Paris',
  Amsterdam='Amsterdan',
  Cologne='Cologne',
  Brussels='Brussels',
  Dusseldorf='Dusseldorf',
  Hamburg='Hamburg'
}
export enum SliceOfferNearby{
  Start = 0,
  End =  3,
}
export const ratingReview = [5,4,3,2,1];

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorite = '/favorite',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_IMAGES_PER_PROPERTY = 6;

export const LEAFLET_SIZE: {
  ICON: PointExpression | undefined,
  ANCOR: PointExpression | undefined,
} = {
  ICON: [40, 40],
  ANCOR: [20,40],
};
export const citiesList: string[] = Object.entries(Cities)
  .map(([value]) => (value));

export const URL_MARKER = {
  DEFAULT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  CURRENT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
};

export default Pages;
