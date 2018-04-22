import { ILink } from "./ILink";

export interface IMagazine {
    imgName: string;
    address: string;
    title: string;
    links: ILink[];    
}