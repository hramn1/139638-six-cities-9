import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Pages from '../../const';
import Property from '../property/property';
import Error404 from '../error404/error404';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks/index';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {
  const {isLoading, offers} = useAppSelector((state) => state.getOffers);
  const {authorizationStatus} = useAppSelector((state) => state.requireAuth);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index
          element={
            <Main
              offers={offers}
            />
          }
        />
        <Route path={Pages.Favor}
          element={
            <PrivateRoute
              status={authorizationStatus}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={Pages.Room}
          element={
            <Property
              offers={offers}
            />
          }
        />
        <Route path='*'
          element={<Error404/>}
        />
        <Route path={Pages.Login}
          element={
            <PrivateRoute
              status={authorizationStatus}
            >
              <Login />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
