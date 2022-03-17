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
export const comments: CommentType[] = [
  {
    'id': 1,
    'user': {
      'id': 17,
      'isPro': false,
      'name': 'Emely',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/8.jpg',
    },
    'rating': 4,
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': '2022-02-15T21:48:13.665Z',
  },
  {
    'id': 1,
    'user': {
      'id': 18,
      'isPro': false,
      'name': 'Jane',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/6.jpg',
    },
    'rating': 3,
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': '2022-02-15T21:28:13.665Z',
  },
];
