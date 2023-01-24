import { QuestType } from '../const/quest-type';
import { QuestLevel } from '../const/quest-level';

export type Quest = {
id: number;
title: string;
previewImg: string;
previewImgWebp: string;
level: QuestLevel;
type: QuestType;
peopleMinMax: [number, number];
description: string;
coverImg: string;
coverImgWebp: string;
}

export type QuestPreview = Pick<Quest, 'id'|'title'|'previewImg'|'previewImgWebp'|'level'|'peopleMinMax'>;
