import { combineReducers } from '@reduxjs/toolkit';

import { bookingProcess } from './booking-process/booking-process';
import { filterProcess } from './filter-process/filter-process';
import { questsProcess } from './quests-process/quests-process';
import { userProcess } from './user-process/user-process';

import { NameSpace } from '../const/name-space';
import { reservationProcess } from './reservation-process/reservation-process';

export const rootReducer = combineReducers({
  [NameSpace.Quest]: questsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Filter]: filterProcess.reducer,
  [NameSpace.Booking]: bookingProcess.reducer,
  [NameSpace.Reservation]: reservationProcess.reducer
});
