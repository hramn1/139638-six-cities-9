import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {OffersType} from '../../mocks/offers';
import Pages from '../../const';
import {useState} from 'react';
import {getRating} from '../../functions';
import {useAppDispatch} from '../../hooks';
import {chooseOffer} from '../../store/actions';


function ListProperty({offers}: {offers:OffersType}): JSX.Element {
  const [id, setId] = useState(0);
  const dispatch = useAppDispatch();
  const handleMouseEnter = (offerId: number) =>{
    dispatch(chooseOffer(offerId));
  };

  return (

    <Fragment>
      {offers.map((offer) => (
        <article key={offer.id}
          onMouseEnter={()=>{
            setId(offer.id);
            handleMouseEnter(offer.id);
          }}
          className="cities__place-card place-card"
        >
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={`${Pages.Room}=${id}`}>
              <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"/>
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${getRating(offer.rating)}%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`${Pages.Room}=${id}`}>{offer.title}</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      ))}
    </Fragment>);
}
export default ListProperty;
