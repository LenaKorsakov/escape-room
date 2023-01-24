import {createAction} from '@reduxjs/toolkit';

import { Action } from '../const/action';

import { Quest } from '../@types/quest-types';

export const fetchAllQuests = createAction(
  Action.FetchAllQuests,
  (quests: Quest[]) => ({
    payload: quests
  })
);

