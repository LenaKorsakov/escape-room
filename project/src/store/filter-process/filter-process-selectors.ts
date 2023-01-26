import { State } from '../../@types/store-types';
import { NameSpace } from '../../const/name-space';
import { QuestLevel } from '../../const/quest-level';
import { QuestType } from '../../const/quest-type';

export const getFilterByType = (state: State): QuestType => state[NameSpace.Filter].typeOption;
export const getFilterByLevel = (state: State): QuestLevel => state[NameSpace.Filter].levelOption;
