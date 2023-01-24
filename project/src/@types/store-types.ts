import { AuthorizationStatus } from '../const/authorization-status';
import { store } from '../store/index';
import { Quest, QuestPreview } from './quest-types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  email: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData;
};

export type QuestsProcess = {
  quests: QuestPreview[];
  selectedQuest: Quest;
}

