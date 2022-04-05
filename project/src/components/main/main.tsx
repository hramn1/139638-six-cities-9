import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import {setCity} from '../../store/actions';
import {OffersType} from '../../types/state';
import ListProperty from '../list-property/list-property';
import MapW from '../map/map';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {citiesList}  from '../../const';
import SortList from '../sort-list/sort-list';
import {getSorting} from '../../functions';

function Main({offers}: {offers:OffersType[]}): JSX.Element {
  const {cityState} = useAppSelector((state) => state.cityReducer);
  const {sortState} = useAppSelector((state) => state.sortReducer);

  const dispatch = useAppDispatch();
  const handleClick = (evt: React.SyntheticEvent) =>{
    const htmlElCity = evt.target as HTMLElement;
    const cityTitle = htmlElCity.textContent;
    dispatch(setCity(cityTitle));
  };
  const cityOffers = offers.filter((offer)=>offer.city.name === cityState);
  const sortOffers = getSorting(sortState,cityOffers);
  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                {citiesList.map((city)=> (
                  <li
                    key={city}
                    onClick={handleClick}
                    className="locations__item"
                  >
                    <Link className={`${(city===cityState) ? 'locations__item-link tabs__item tabs__item--active':'locations__item-link tabs__item'}`} to='/'>
                      <span>{city}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {cityState}</b>
                <SortList
                  sortName = {sortState}
                />
                <div className="cities__places-list places__list tabs__content">
                  <ListProperty offers = {sortOffers} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MapW offers = {cityOffers} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Main;
