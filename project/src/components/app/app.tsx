import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import BookingPage from '../../pages/booking-page/booking-page';
import QuestPage from '../../pages/quest-page/quest-page';
import ReservationsPage from '../../pages/reservations-page/reservations-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';

import { AppRoute } from '../../const/app-route';
import PrivateRouter from '../private-router/private-router';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        >
        </Route>
        <Route
          path={AppRoute.Contacts}
          element={<ContactsPage/>}
        >
        </Route>
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        >
        </Route>
        <Route
          path={`${AppRoute.Quest}/:id`}
          element={<QuestPage/>}
        >
        </Route>
        <Route
          path={`${AppRoute.Quest}/:id/booking`}
          element={
            <PrivateRouter aurhorizationStatus={authorizationStatus}>
              <BookingPage/>
            </PrivateRouter>
          }
        >
        </Route>
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRouter aurhorizationStatus={authorizationStatus}>
              <ReservationsPage/>
            </PrivateRouter>
          }
        >
        </Route>
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage/>}
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
