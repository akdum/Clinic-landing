type DoctorNumber = {
    value: string;
    title: string;
}

export interface IDoctor {
    photoName: string;
    title: {
        surname: string;
        name: string;
        spec: string;
    };
    fileName: string;
    numbers?: DoctorNumber[];
    education?: string;
}