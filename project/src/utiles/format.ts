import { Date, DateRaw } from '../const/date';
import { QuestLevel, QuestLevelRaw } from '../const/quest-level';

export const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase().concat(value.slice(1));

export const translateDate = (date: DateRaw) => {
  if (date === DateRaw.TODAY) {
    return Date.TODAY;
  }

  return Date.TOMORROW;
};

export const translateLevel = (level: QuestLevelRaw) => {
  switch(level) {
    case QuestLevelRaw.Easy:
      return QuestLevel.Easy;
    case QuestLevelRaw.Medium:
      return QuestLevel.Medium;
    case QuestLevelRaw.Hard:
      return QuestLevel.Hard;

    default:
      return QuestLevel.Any;
  }
};
