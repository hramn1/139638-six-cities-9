import {Navigate} from 'react-router-dom';
import Pages, {AuthorizationStatus} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
  status: AuthorizationStatus
};

function PrivateRoute({children, status}: PrivateRouteProps): JSX.Element {
  console.log(status)
  return (status === AuthorizationStatus.Auth) ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
