import { useAppSelector } from './index';



export const useAppLoading = () => {
  const { sLodaing } = useAppSelector((state) => state);
  if (isCheckedAuth(authorizationStatus) || isLodaing) {
    return (
      true
    );
  }
  return false;
};
