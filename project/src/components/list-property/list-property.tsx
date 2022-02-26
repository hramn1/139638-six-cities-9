import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {OffersType} from '../../mocks/offers';
import Pages from '../../const';
import {useState} from 'react';
import {setRating} from '../../functions';

function ListProperty({offers}: {offers:OffersType}): JSX.Element {
  const [id, setId] = useState(0);
  return (
    <Fragment>
      {offers.map((it) => (
        <article key={it.id}
          onMouseEnter={()=>{setId(it.id);
          }}
          className="cities__place-card place-card"
        >
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={`${Pages.Room}=${id}`}>
              <img className="place-card__image" src={it.previewImage} width="260" height="200" alt="Place"/>
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{it.price}</b>
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
                <span style={{width: `${setRating(it.rating)}%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`${Pages.Room}=${id}`}>{it.title}</Link>
            </h2>
            <p className="place-card__type">{it.type}</p>
          </div>
        </article>
      ))}
    </Fragment>);
}
export default ListProperty;
