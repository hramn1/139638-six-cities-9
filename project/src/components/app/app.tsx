import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Pages from '../../const';
import Property from '../property/property';
import Error404 from '../error404/error404';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';

function App({numberRent}: {numberRent:number}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index
          element = {<Main numberRent={numberRent}/>}
        />
        <Route path={Pages.Favor}
          element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route path={Pages.Room}
          element={<Property/>}
        />
        <Route path='*'
          element={<Error404/>}
        />
        <Route path={Pages.Login}
          element={<Login/>}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
