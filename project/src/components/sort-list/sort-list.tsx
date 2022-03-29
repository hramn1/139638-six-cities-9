import React from 'react';
import {useAppDispatch} from '../../hooks/index';
import {setSorting} from '../../store/actions';

function SortList({sortName}: {sortName:string | null}): JSX.Element{
  const dispatch = useAppDispatch();
  const [sortList, setSortList] = React.useState(false);
  const fieldChangeHandle = (evt: React.SyntheticEvent) =>{
    const htmlElCity = evt.target as HTMLElement;
    const sortNames = htmlElCity.textContent;
    dispatch(setSorting(sortNames));
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span   className="places__sorting-caption">Sort by </span>
      <span onClick={()=>setSortList(!sortList)} className="places__sorting-type" tabIndex={0}>
        {sortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={fieldChangeHandle}  className={`${(sortList) ? 'places__options places__options--custom places__options--opened':'places__options places__options--custom'}`}>
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}
export default SortList;
