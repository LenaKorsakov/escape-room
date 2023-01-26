import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { displayError } from '../../store/actions';
import { WarningMessage } from '../../const/warning-message';

type PrivateRouterProps = {
 children: JSX.Element;
 aurhorizationStatus: AuthorizationStatus;
}

function PrivateRouter({children, aurhorizationStatus}: PrivateRouterProps): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(aurhorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(displayError(WarningMessage.NoAuthWarning));
    }
  }, [aurhorizationStatus, dispatch]);

  return (
    (aurhorizationStatus !== AuthorizationStatus.Auth)
      ? <Navigate to={AppRoute.Login} replace state={{from: location}}/>
      : children
  );}

export default PrivateRouter;
