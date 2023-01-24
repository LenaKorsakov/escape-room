import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const/name-space';
import { questsProcess } from './quests-process/quest-process';
import { userProcess } from './user-process/user-process';


export const rootReducer = combineReducers({
  [NameSpace.Quest]: questsProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});
