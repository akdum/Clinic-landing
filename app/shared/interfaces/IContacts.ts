import { ICoordinates } from "./ICoordinates";

export interface IContacts {
    isContactsPage: boolean;
    address: string;
    coordinates: ICoordinates;
    email: string;
    phones: string[];
    workHours: string[];    
}