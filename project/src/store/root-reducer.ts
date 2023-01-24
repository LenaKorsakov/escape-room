import { createReducer } from '@reduxjs/toolkit';
import { fetchAllQuests } from './api-actions';
import { quests } from '../mocks/quests-mock';

const initialState = {
  quests
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllQuests, (state, action) => {
      state.quests = action.payload;
    });
});

export {reducer};
