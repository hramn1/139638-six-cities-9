import React from 'react';
import Review from '../review/review';

import {useAppSelector} from '../../hooks/index';

function ReviewsList(): JSX.Element {
  const {comments} = useAppSelector((state) => state.getComments);
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {[...comments].sort((a, b)=>Date.parse(b.date) - Date.parse(a.date)).map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}
export default ReviewsList;
