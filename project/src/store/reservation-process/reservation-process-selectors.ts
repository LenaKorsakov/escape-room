import { NameSpace } from '../../const/name-space';
import { State } from '../../@types/store-types';
import { ReservationsData } from '../../@types/reservation-types';

export const getAllReservations = (state: State): ReservationsData => state[NameSpace.Reservation].reservations;
export const isReservationsLoading = (state: State): boolean => state[NameSpace.Reservation].isReservationsLoading;
