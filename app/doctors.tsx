import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IDoctor } from './shared/interfaces/IDoctor';
import { DoctorCard } from './components/doctor-card/DoctorCard';

interface IDoctorDocument extends Document {
    doctor: IDoctor;
}

declare const document: IDoctorDocument;
const doctorData = document.doctor;

if (document.querySelector("#doctor-card")) {
    ReactDOM.render(<DoctorCard {...doctorData} />, document.getElementById('doctor-card'));
}