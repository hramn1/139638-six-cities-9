import React, {FormEvent, Fragment} from 'react';
import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import {NewReview} from '../../types/state';
import {MailVerification, ratingReview} from '../../const';
function FormComment(room: {room: number | undefined}): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = React.useState({
    rating: 0,
    review: '',
    roomId: room,
  });
  const fieldChangeHandle = (evt: React.SyntheticEvent) =>{
    const {name, value} = evt.currentTarget as HTMLInputElement;
    setFormData({...formData, [name]: value});
    setIsButtonDisabled(!(formData.review.length >= MailVerification.minLength && formData.rating !== MailVerification.rating));
  };
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const onSubmit = (newReview: NewReview) => {
    dispatch(addReviewAction(newReview));
  };
  const handleClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const { rating, review, roomId } = formData;

    if (rating && review && roomId) {
      onSubmit({
        rating,
        review,
        roomId,
      });
    }
    setFormData({ rating: 0, review: '', roomId: {room: 0} });
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array(...ratingReview).map((it) =>(
          <Fragment key={it} >
            <input  onChange={fieldChangeHandle}
              className="form__rating-input visually-hidden" name="rating" defaultValue={it} id={`${it}-stars`} type="radio"
            />
            <label htmlFor={`${it}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        onChange={fieldChangeHandle}
        id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default FormComment;
