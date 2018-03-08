import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './applyConsultation.module.scss';
import { IApplyConsultationProps } from './IApplyConsultationProps';

export class ApplyConsultation extends React.Component<IApplyConsultationProps,null> {
    render() {
        return (
            <div className="apply-consultation" >
                <a className="" href={window.location.origin + '/pages/consultation.html'}>Записаться на прием</a>
            </div>
        );
    }
}