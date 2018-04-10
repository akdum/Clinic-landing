import { IDoctor } from "../../shared/interfaces/IDoctor";

export interface IDoctorsProps {
    showSeeAll: boolean;    
    title: string;
    doctorsRows: IDoctor[][];
    pageName: string;
}