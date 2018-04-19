import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IDoctor } from './shared/interfaces/IDoctor';
import { DoctorCard } from './components/doctor-card/DoctorCard';
import {doctorsData} from './data/doctors';

const doctor:IDoctor = doctorsData.find((item:IDoctor) => item.pageName === (window.location.pathname.split('/').slice(-1)[0]));

if (document.querySelector("#doctor-card")) {
    ReactDOM.render(<DoctorCard {...doctor} />, document.getElementById('doctor-card'));
}