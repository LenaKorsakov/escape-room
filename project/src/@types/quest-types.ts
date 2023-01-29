import { QuestType } from '../const/quest-type';
import { QuestLevelRaw } from '../const/quest-level';

export type Quest = {
id: number;
title: string;
previewImg: string;
previewImgWebp: string;
level: QuestLevelRaw;
type: QuestType;
peopleMinMax: [number, number];
description: string;
coverImg: string;
coverImgWebp: string;
}

export type QuestPreview = Pick<Quest, 'id'|'title'|'previewImg'|'previewImgWebp'|'level'|'peopleMinMax'|'type'>;

export type QuestInfo = {
  id: number;
  locations: Location[];
  slots: {
    today: TimeSlot[];
    tomorrow: TimeSlot[];
  };
}

export type Location = {
  id: number;
  address: string;
  coords: Coordinates;
}

type TimeSlot = {
  time: string;
  isAvailable: boolean;
}

export type Coordinates = [number, number];
