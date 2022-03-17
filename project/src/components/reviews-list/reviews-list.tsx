import React from 'react';
import {CommentType} from '../../mocks/comments';
import Review from '../review/review';

function ReviewsList({comments}: {comments:CommentType[]}): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => (
          <Review
            key={review.user.id}
            review={review}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}
export default ReviewsList;
