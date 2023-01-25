import { NameSpace } from '../../const/name-space';
import { State } from '../../@types/store-types';
import { Quest, QuestPreview } from '../../@types/quest-types';


export const getAllQuests = (state: State): QuestPreview[] => state[NameSpace.Quest].quests;
export const isQuestsLoading = (state: State): boolean => state[NameSpace.Quest].isQuestsLoading;
export const getSelectedQuest = (state: State): Quest => state[NameSpace.Quest].selectedQuest;
