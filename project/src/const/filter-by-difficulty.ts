import { QuestLevel } from './quest-level';

export const FILTER_BY_DIFFICULTY = [
  {level: QuestLevel.Any, title: 'Любой'},
  {level: QuestLevel.Easy, title: 'Лёгкий'},
  {level: QuestLevel.Medium, title: 'Средний'},
  {level: QuestLevel.Hard, title: 'Сложный'},
];
