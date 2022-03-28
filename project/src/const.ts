import {PointExpression} from 'leaflet';

enum Pages {
  Main = '/',
  Login = '/login',
  Favor = '/favorites',
  Room = '/offer/:id'
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
export enum Cities {
  Paris='Paris',
  Amsterdam='Amsterdan',
  Cologne='Cologne',
  Brussels='Brussels',
  Dusseldorf='Dusseldorf',
  Hamburg='Hamburg'
}

export const MAX_IMAGES_PER_PROPERTY = 6;

export const LEAFLET_ICON_SIZE: PointExpression | undefined = [40, 40];

export const LEAFLET_ANCOR_SIZE: PointExpression | undefined = [20,40];

export const citiesList: string[] = Object.entries(Cities)
  .map(([value]) => (value));

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export default Pages;
