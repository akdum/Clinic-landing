import { IService } from "../../shared/interfaces/IService";

export interface IServicesProps {
    title?: string;
    isBlock: boolean;
    services: IService[][]
}