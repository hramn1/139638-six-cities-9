import React, {Fragment, MouseEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {OffersType} from '../../types/state';
import Pages, {AuthorizationStatus} from '../../const';
import {useState} from 'react';
import {getRating} from '../../functions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {chooseOffer} from '../../store/actions';
import {store} from '../../store/store';
import {setFavoritesAction, fetchOffersAction} from '../../store/api-actions';

function ListProperty({offers}: {offers:OffersType[]}): JSX.Element {
  const [idPage, setId] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector((state) => state.requireAuth);

  const handleMouseEnter = (offerId: number) =>{
    dispatch(chooseOffer(offerId));
  };
  const onBookmarkClick = (evt: MouseEvent<HTMLButtonElement>, id:number, isFavorite:boolean) => {
    evt.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(Pages.Login);
    }
    const promiseToFavor = new Promise((resolve) =>{
      resolve(dispatch(setFavoritesAction({id, isFavorite: !isFavorite})));
    });
    promiseToFavor.then(() => (
      store.dispatch(fetchOffersAction())),
    );
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
          {offer.isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> : ''}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={`${Pages.Room}=${idPage}`}>
              <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"/>
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button onClick={(evt)=>{
                onBookmarkClick(evt, offer.id, offer.isFavorite);
              }}
              className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button"
              >
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
              <Link to={`${Pages.Room}=${idPage}`}>{offer.title}</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      ),
      )}
    </Fragment>);
}
export default ListProperty;
