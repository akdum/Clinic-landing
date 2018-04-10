import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IDoctor } from "../../shared/interfaces/IDoctor";
import './doctor.module.scss';

export class Doctor extends React.Component<IDoctor, null> {
    render() {
        return(
            <div className="doctor">
                <div className="doctor__img">
                    <img src={window.location.origin + '/img/doctors/square_150/' + this.props.photoName} />
                </div>
                <strong className="doctor__name">
                    <a href={window.location.origin + '/pages/doctors/' + this.props.fileName}><span>{this.props.title.surname}</span> {this.props.title.name}</a>
                </strong>
                <div className="doctor__spec">{this.props.title.spec}</div>
            </div>
        )
    }
}