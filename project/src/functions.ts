import {Month} from './const';
import {offers, OffersType} from './mocks/offers';

export const getRating = (rating: number): number => rating/5 * 100;
export const getNormalDate = (date: string) =>{
  const monthComment = Month[new Date(date).getMonth()];
  const yearComment = new Date(date).getFullYear();
  return `${monthComment} ${yearComment}`;
};

export const getSorting = (sort: string | null, offers: OffersType)=>{
  switch (sort){
    case 'Price: high to low':
      offers.sort((a,b)=>b.price-a.price)
  }
  return offers
}
