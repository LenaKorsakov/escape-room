import { createSlice } from '@reduxjs/toolkit';
import { Quest } from '../../@types/quest-types';
import { QuestsProcess } from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { fetchQuestByIdAction, fetchQuestPreviewsAction } from '../api-actions';

const initialState: QuestsProcess = {
  quests: [],
  selectedQuest: {} as Quest
};

export const questsProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchQuestPreviewsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
      .addCase(fetchQuestByIdAction.fulfilled, (state, action) =>{
        state.selectedQuest = action.payload;
      });
  }
});

