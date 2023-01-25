import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

type PrivateRouterProps = {
 children: JSX.Element;
 aurhorizationStatus: AuthorizationStatus;
}

function PrivateRouter({children, aurhorizationStatus}: PrivateRouterProps): JSX.Element {
  useEffect(() => {
    if(aurhorizationStatus !== AuthorizationStatus.Auth) {
      toast.warn('You are not logged in or you do not have permission to this page');
    }
  }, [aurhorizationStatus]);

  return (
    (aurhorizationStatus !== AuthorizationStatus.Auth)
      ? <Navigate to={AppRoute.Login}/>
      : children
  );}

export default PrivateRouter;
