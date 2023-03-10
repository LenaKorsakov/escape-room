import { AuthorizationStatus } from '../const/authorization-status';
import { store } from '../store/index';
import { Location, Quest, QuestInfo, QuestPreview } from './quest-types';
import { ReservationsData } from './reservation-types';

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
  isLoginLoading: boolean;
};

export type QuestsProcess = {
  quests: QuestPreview[];
  selectedQuest: Quest;
  isQuestsLoading: boolean;
}

export type BookingProcess = {
  bookedQuest: QuestInfo;
  selectedLocation: Location;
  isValid: boolean;
}

export type ReservationProcess = {
  reservations: ReservationsData;
  isReservationsLoading: boolean;
}
