import { Link } from 'react-router-dom';

import HeaderNavigation from './header-navigation';

import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

import { AppRoute } from '../../const/app-route';

function HeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="container container--size-l">
      <span className="logo header__logo">
        <svg width={134} height={52} aria-hidden="true">
          <use xlinkHref="#logo" />
        </svg>
      </span>
      <HeaderNavigation/>
      <div className="header__side-nav">
        <Link
          className="btn btn--accent header__side-item"
          to={AppRoute.Main}
          title="To the main page"
          onClick={handleButtonClick}
        >
        Выйти
        </Link>
        <a
          className="link header__side-item header__phone-link"
          href="tel:88003335599"
        >
        8 (000) 111-11-11
        </a>
      </div>
    </div>
  );
}

export default HeaderAuth;
