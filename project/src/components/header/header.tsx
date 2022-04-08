import {Link, useNavigate} from 'react-router-dom';
import {MouseEvent} from 'react';
import Pages, {AuthorizationStatus} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {store} from '../../store/store';
import {fetchFavoritesAction, logoutAction} from '../../store/api-actions';

function Header () {
  const {authorizationStatus} = useAppSelector((state) => state.requireAuth);
  const {userName} = useAppSelector((state) => state.requireAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const promiseToFavor = new Promise((resolve) =>{
      resolve(store.dispatch(fetchFavoritesAction()));
    });
    promiseToFavor.then(()=>navigate(Pages.Favor));

  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus !== AuthorizationStatus.Auth ?
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to={Pages.Login}
                  >
                    <span className="header__signin">Sign in</span>
                  </Link>
                </li> :
                <>
                  <li className="header__nav-item user">
                    <Link onClick={onClick} className="header__nav-link header__nav-link--profile" to={Pages.Main}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userName}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link onClick={() => dispatch(logoutAction())} className="header__nav-link" to="/">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
