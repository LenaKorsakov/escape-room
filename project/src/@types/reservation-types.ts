import { Date } from '../const/date';
import { QuestPreview } from './quest-types';

export type BookingInfo = {
date: Date;
time: string;
contactPerson: string;
phone: string;
withChildren: boolean;
peopleCount: number;
locationId: number;
questId: number;
}

type Reservation = {
    date: Date;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    id: number;
    location: Location;
    quest: QuestPreview;
}

export type ReservationsData = Reservation[];
