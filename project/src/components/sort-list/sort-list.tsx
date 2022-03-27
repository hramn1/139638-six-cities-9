import React from 'react';
import {OffersType} from '../../mocks/offers';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {setSorting} from '../../store/actions';
import {getSorting} from '../../functions';

function SortList({offers}: {offers:OffersType}): JSX.Element{
  const dispatch = useAppDispatch();
  const fieldChangeHandle = (evt: React.SyntheticEvent) =>{
    const htmlElCity = evt.target as HTMLElement;
    const cityTitle = htmlElCity.textContent;
    dispatch(setSorting(cityTitle));
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
                     Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
    <ul onClick={fieldChangeHandle} className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
      <li className="places__option" tabIndex={0}>Price: low to high</li>
      <li className="places__option" tabIndex={0}>Price: high to low</li>
      <li className="places__option" tabIndex={0}>Top rated first</li>
    </ul>
    </form>
  )
}
export default SortList
