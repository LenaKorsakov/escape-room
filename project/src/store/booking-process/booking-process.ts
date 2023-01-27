import { createSlice } from '@reduxjs/toolkit';
import { QuestInfo } from '../../@types/quest-types';
import { BookingProcess} from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { fetchQuestBookingInfoByIdAction } from '../api-actions';

const initialState: BookingProcess = {
  bookedQuest: {} as QuestInfo,
};

export const bookingProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchQuestBookingInfoByIdAction.fulfilled, (state, action) =>{
        state.bookedQuest = action.payload;
      });
  }
});
