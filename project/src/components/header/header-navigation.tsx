import { AppRoute } from '../../const/app-route';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { HeaderContext } from './header';
import { AuthorizationStatus } from '../../const/authorization-status';

function HeaderNavigation(): JSX.Element {
  const authorizationStatus = useContext(HeaderContext);

  return (
    <nav className="main-nav header__main-nav">
      <ul
        className="main-nav__list"
      >
        <li className="main-nav__item">
          <NavLink
            className={({isActive}) => (isActive ? 'link active' : 'link')}
            to={AppRoute.Main}
          >
            Квесты
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            className={({isActive}) => (isActive ? 'link active' : 'link')}
            to={AppRoute.Contacts}
          >
            Контакты
          </NavLink>
        </li>
        {(authorizationStatus === AuthorizationStatus.Auth) &&
          <li className="main-nav__item">
            <NavLink
              className={({isActive}) => (isActive ? 'link active' : 'link')}
              to={AppRoute.MyQuests}
            >
            Мои бронирования
            </NavLink>
          </li>}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
