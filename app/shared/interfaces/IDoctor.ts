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
    pageName: string;
    numbers?: DoctorNumber[];
    education?: string;
}