import { State } from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { QuestLevelRaw } from '../../const/quest-level';
import { QuestType } from '../../const/quest-type';

export const getFilterOptionByType = (state: State): QuestType => state[NameSpace.Filter].typeOption;
export const getFilterOptionByLevel = (state: State): QuestLevelRaw => state[NameSpace.Filter].levelOption;
