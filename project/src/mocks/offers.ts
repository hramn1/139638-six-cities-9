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
export const points: Location[] = [
  {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 16,
  },
  {
    'latitude': 52.369553943508,
    'longitude': 4.85309666406198,
    'zoom': 16,
  },
  {
    'latitude': 52.3909553943508,
    'longitude': 4.929309666406198,
    'zoom': 16,
  },
  {
    'latitude': 52.3809553943508,
    'longitude': 4.939309666406198,
    'zoom': 16,
  },
];
export const offers: OffersType = [
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/13.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
    ],
    'title': 'The house among olive ',
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.5,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 6,
    'price': 154,
    'goods': [
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Fridge',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16,
    },
    'id': 1,
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/13.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
    ],
    'title': 'Tile House',
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.8,
    'type': 'apartment',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 238,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer',
      'Baby seat',
      'Air conditioning',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16,
    },
    'id': 2,
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/9.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 123,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Breakfast',
      'Fridge',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16,
    },
    'id': 3,
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/7.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 176,
    'goods': [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16,
    },
    'id': 4,
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/7.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.7,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 235,
    'goods': [
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': false,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16,
    },
    'id': 6,
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/2.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 102,
    'goods': [
      'Baby seat',
      'Laptop friendly workspace',
      'Breakfast',
      'Towels',
      'Fridge',
      'Air conditioning',
      'Washer',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 52.36954000000001,
      'longitude': 4.914976,
      'zoom': 16,
    },
    'id': 9,
  },
];
