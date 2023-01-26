import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/app';
import { checkAuthorizationStatusAction, fetchQuestPreviewsAction } from './store/api-actions';
import { store } from './store/index';
import { changeLevel } from './store/filter-process/filter-process';
import { changeType } from './store/filter-process/filter-process';
import { QUEST_BY_LEVEL_DEFAULT } from './const/quest-level';
import { QUEST_BY_TYPE_DEFAULT } from './const/quest-type';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchQuestPreviewsAction());
store.dispatch(checkAuthorizationStatusAction());

store.dispatch(changeLevel(QUEST_BY_LEVEL_DEFAULT));
store.dispatch(changeType(QUEST_BY_TYPE_DEFAULT));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
);
