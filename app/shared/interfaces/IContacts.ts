import { ICoordinates } from "./ICoordinates";

export interface IContacts {
    isContactsPage: boolean;
    address: string;
    coordinates: ICoordinates;
    phones: string[];
    workHours: string[];
}