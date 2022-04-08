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
export function validatePassword(password: string) {
  const errors = [];
  if (password.search(/[a-z]/i) < 0) {
    errors.push('Пароль должен содержать букву');
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push('Пароль должен содержать цифры');
  }
  if(errors.length > 0){
    const loginError =  document.querySelector('.login__errors');
    if (loginError !== null) {
      loginError.textContent = errors.join(' ');
    }
    return false;
  }
  return true;
}
export function validateMail(mail: string) {
  const loginError =  document.querySelector('.login__errors');
  if (mail.search(/[a-z]/i) < 0 || !mail.length || mail.search('@') < 0) {
    if (loginError !== null) {
      loginError.textContent = 'Не валидный Email';
    }
    return false;
  }
  return true;
}
