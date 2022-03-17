import React from 'react';
import {CommentType} from '../../mocks/comments';
import {getNormalDate, getRating} from '../../functions';

function Review({review}: {review: CommentType}): JSX.Element {
  return(
    <li key={review.user.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} alt="Reviews avatar" width={54} height={54} />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRating(review.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getNormalDate(review.date)}</time>
      </div>
    </li>
  );
}
export default Review;
