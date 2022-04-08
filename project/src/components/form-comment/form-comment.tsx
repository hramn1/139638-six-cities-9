import React, {FormEvent, Fragment} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import {NewReview} from '../../types/state';
import {ReviewVerification, ratingReview} from '../../const';
function FormComment(room: {room: number | undefined}): JSX.Element {
  const dispatch = useAppDispatch();
  const {isSuccess} = useAppSelector((state) => state.getComments);
  function changeFields() {
    if(isSuccess){
      setFormData({ rating: 0, review: '', roomId: {room: 0}})
    } else(
      alert('Форма не отправлена')
    )
  }
  const [formData, setFormData] = React.useState({
    rating: 0,
    review: '',
    roomId: room,
  });
  const handleFieldChange = (evt: React.SyntheticEvent) =>{
    const {name, value} = evt.currentTarget as HTMLInputElement;
    setFormData({...formData, [name]: value});
    setIsButtonDisabled(!(formData.review.length >= ReviewVerification.MinLength && formData.rating !== ReviewVerification.Rating));
  };

  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const onSubmit = (newReview: NewReview) => {
    dispatch(addReviewAction(newReview));
  };

  const handleSubmitClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const { rating, review, roomId } = formData;

    if (rating && review && roomId) {
      onSubmit({
        rating,
        review,
        roomId,
      });
    }
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array(...ratingReview).map((it) =>(
          <Fragment key={it} >
            <input  onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              checked={Number(formData.rating) === it}
              name="rating" value={it} id={`${it}-stars`} type="radio"
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
        onChange={handleFieldChange}
        id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          onClick={handleSubmitClick}
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default FormComment;
