import React,  {MouseEvent} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import {getRating} from '../../functions';
import {useAppSelector} from '../../hooks';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {store} from '../../store/store';
import Pages, {AuthorizationStatus} from '../../const';
import {setFavoritesAction, fetchFavoritesAction} from '../../store/api-actions';

function Favorites(): JSX.Element {
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector((state) => state.requireAuth);

  const {offersFavor} = useAppSelector((state) => state.loadFavor);
  const favoriteOffers = offersFavor.filter((offer)=> offer.isFavorite);
  const cities = Array.from(new Set(favoriteOffers.map((city) => city.city.name)));

  const onBookmarkClick = (evt: MouseEvent<HTMLButtonElement>, id:number, isFavorites:boolean) => {
    evt.preventDefault();

    const isFavor = !isFavorites;
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(Pages.Login);

    }
    const promiseToFavor = new Promise((resolve) =>{
      resolve(store.dispatch(setFavoritesAction({id, isFavor})));
    });
    promiseToFavor.then(()=>store.dispatch(fetchFavoritesAction()));
  };
  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className={`page ${offersFavor.length === 0 ? 'page--favorites-empty' : ''}`}>
        <Header/>
        {favoriteOffers.length !== 0 ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cities.map((city) => (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="/">
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offersFavor.filter((offer) => offer.city.name === city).map((offer) => (
                          <article key={offer.id} className="favorites__card place-card">
                            {offer.isPremium ?
                              <div className="place-card__mark">
                                <span>Premium</span>
                              </div> : ''}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to="/">
                                <img className="place-card__image" src={offer.previewImage} alt="Place" width={150}
                                  height={110}
                                />
                              </Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">€{offer.price}</b>
                                  <span className="place-card__price-text">/&nbsp;night</span>
                                </div>
                                <button
                                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                                  type="button"
                                  onClick={(evt)=>{
                                    onBookmarkClick(evt, offer.id, offer.isFavorite);
                                  }}
                                >
                                  <svg className="place-card__bookmark-icon" width={18} height={19}>
                                    <use xlinkHref="#icon-bookmark"/>
                                  </svg>
                                  <span className="visually-hidden">In bookmarks</span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: `${getRating(offer.rating)}%`}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${Pages.Room}=${offer.id}`}>{offer.title}</Link>
                              </h2>
                              <p className="place-card__type">{offer.type}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
          : <FavoritesEmpty/>}
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Favorites;
