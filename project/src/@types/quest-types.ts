import { QuestLevel } from '../const/quest-level';
import { QuestType } from '../const/quest-type';

export type Quest = {
id: number;
title: string;
previewImg: string;
previewImgWebp: string;
level: QuestLevel;
type: QuestType;
peopleMinMax: [number, number];
}
