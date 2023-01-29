import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location, QuestInfo } from '../../@types/quest-types';
import { BookingProcess} from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { fetchQuestBookingInfoByIdAction } from '../api-actions';

const initialState: BookingProcess = {
  bookedQuest: {} as QuestInfo,
  selectedLocation: {} as Location
};

export const bookingProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<Location>) => {
      state.selectedLocation = action.payload;
    },},
  extraReducers(builder){
    builder
      .addCase(fetchQuestBookingInfoByIdAction.fulfilled, (state, action) =>{
        state.bookedQuest = action.payload;
      });
  }
});

export const { changeLocation } = bookingProcess.actions;
