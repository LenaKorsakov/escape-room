import { createContext } from 'react';
import { AuthorizationStatus } from '../../const/authorization-status';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-no-auth';

export const HeaderContext = createContext<AuthorizationStatus>(AuthorizationStatus.NoAuth);

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HeaderContext.Provider value={authorizationStatus}>
      <header className="header">
        {authorizationStatus === AuthorizationStatus.Auth ? <HeaderAuth/> : <HeaderNoAuth/>}
      </header>
    </HeaderContext.Provider>
  );
}

export default Header;
