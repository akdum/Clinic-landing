import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IDoctor } from "../../shared/interfaces/IDoctor";
import './doctor.module.scss';

export class Doctor extends React.Component<IDoctor, null> {
    render() {
        return(
            <div className="doctor">
                <div className="">
                    <img src={window.location.origin + '/img/doctors/square_150/' + this.props.photoName} />
                </div>
            </div>
        )
    }
}