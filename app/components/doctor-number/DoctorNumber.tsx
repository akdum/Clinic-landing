import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IDoctorNumberProps } from './IDoctorNumberProps';

import './doctorNumber.module.scss';

export class DoctorNumber extends React.Component<IDoctorNumberProps, null> {
    render() {
        return (
            <div className="doctor-number col-md-6">
                <div className="">{this.props.value}</div>
                <span className="">{this.props.title}</span>
            </div>
        )
    }
}