import { Date } from '../const/date';

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

