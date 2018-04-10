import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from '../title/Title';
import { IDoctor } from '../../shared/interfaces/IDoctor';

import './doctorCard.module.scss';
import { DoctorNumber } from '../doctor-number/DoctorNumber';

export class DoctorCard extends React.Component<IDoctor, null> {
    render() {
        return (
            <div className="container">
                <Title value={`${this.props.title.surname} ${this.props.title.name}`} />
                <div className="doctor-card">
                    <div className="doctor-card__subtitle">
                        {this.props.title.spec}
                    </div>
                    <div className="row doctor-card__photo">
                        <div className="col-md-6 text-center">
                            <img src={window.location.origin + '/img/doctors/' + this.props.photoName} />
                        </div>
                    </div>
                    <div className="doctor-card__text-block row">
                        <div className="doctor-card__text-block-numbers col-md-4">
                            <div className="row">
                                {this.props.numbers && this.props.numbers.map((number)=><DoctorNumber {...number} />)}
                            </div>
                        </div>
                        <div className="doctor-card__text-block-history col-md-8">
                            {this.props.education && <div className="doctor-card__text-column-2">{this.props.education}</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}