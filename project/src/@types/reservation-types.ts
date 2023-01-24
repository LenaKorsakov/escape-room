import { Time } from '../const/time';

export type BookingInfo = {
date: Time;
time: string;
contactPerson: string;
phone: string;
withChildren: boolean;
peopleCount: number;
locationId: number;
questId: number;
}

