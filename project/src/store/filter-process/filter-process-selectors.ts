import { State } from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { QuestLevel } from '../../const/quest-level';
import { QuestType } from '../../const/quest-type';

export const getFilterOptionByType = (state: State): QuestType => state[NameSpace.Filter].typeOption;
export const getFilterOptionByLevel = (state: State): QuestLevel => state[NameSpace.Filter].levelOption;
