import {Month} from './const';
import {OffersType} from './types/state';

export const getRating = (rating: number | undefined): number | undefined => {
  if(rating !== undefined){
    return  rating / 5 * 100;
  }
};
export const getNormalDate = (date: string) =>{
  const monthComment = Month[new Date(date).getMonth()];
  const yearComment = new Date(date).getFullYear();
  return `${monthComment} ${yearComment}`;
};

export const getSorting = (sort: string | null, offers: OffersType[])=>{
  switch (sort){
    case 'Price: high to low':
      return [...offers].sort((a,b)=>b.price-a.price);
      break;
    case 'Price: low to high':
      return [...offers].sort((a,b)=>a.price-b.price);
      break;
    case 'Top rated first':
      return [...offers].sort((a,b)=>b.rating-a.rating);
      break;
    default:
      return offers;
  }
};
