import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import BookingPage from '../../pages/booking-page/booking-page';
import QuestPage from '../../pages/quest-page/quest-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';

import { AppRoute } from '../../const/app-route';

function App(): JSX.Element {
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
          element={<BookingPage/>}
        >
        </Route>
        <Route
          path={AppRoute.MyQuests}
          element={<MyQuestsPage/>}
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
