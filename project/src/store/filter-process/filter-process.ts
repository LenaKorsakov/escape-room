import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/name-space';
import { QUEST_BY_LEVEL_DEFAULT, QuestLevel } from '../../const/quest-level';
import { QUEST_BY_TYPE_DEFAULT, QuestType } from '../../const/quest-type';

const initialState = {
  typeOption: QUEST_BY_TYPE_DEFAULT as QuestType,
  levelOption: QUEST_BY_LEVEL_DEFAULT
};

export const filterProcess = createSlice({
  name: NameSpace.Filter,
  initialState,
  reducers: {
    changeType: (state, action: PayloadAction<QuestType>) => {
      state.typeOption = action.payload;
    },
    changeLevel: (state, action: PayloadAction<QuestLevel>) => {
      state.levelOption = action.payload;
    }
  }
});

export const {changeLevel, changeType} = filterProcess.actions;
