import React from 'react';
import {CommentType} from '../../mocks/comments';

function ReviewsList({comments}: {comments:CommentType[]}): JSX.Element {
  return (
    <React.Fragment>
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
  <ul className="reviews__list">

  </ul>
    </React.Fragment>
    )
}
export default ReviewsList
