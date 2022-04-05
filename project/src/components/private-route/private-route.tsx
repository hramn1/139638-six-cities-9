import {Navigate} from 'react-router-dom';
import Pages, {AuthorizationStatus} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
  status: string
};

function PrivateRoute({children, status}: PrivateRouteProps): JSX.Element {
  if(children.type.name === "Favorites") {
    return (status === AuthorizationStatus.Auth) ? children : <Navigate to={'/login'} />;
  }
  if(children.type.name === "Login"){
    return (status !== AuthorizationStatus.Auth) ? children : <Navigate to={'/'} />;
  }
  return children
}

export default PrivateRoute;
