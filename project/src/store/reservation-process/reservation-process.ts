import { createSlice } from '@reduxjs/toolkit';
import { ReservationProcess } from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { fetchReservationsAction } from '../api-actions';

const initialState: ReservationProcess = {
  reservations: [],
  isReservationsLoading: false
};

export const reservationProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchReservationsAction.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.isReservationsLoading = false;
      })
      .addCase(fetchReservationsAction.pending, (state) => {
        state.isReservationsLoading = true;
      })
      .addCase(fetchReservationsAction.rejected, (state) => {
        state.isReservationsLoading = false;
      });
  }
});
