import HeaderNavigation from './header-navigation';

function HeaderLogin(): JSX.Element {

  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </span>
        <HeaderNavigation/>
        <div className="header__side-nav">
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
        8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogin;
