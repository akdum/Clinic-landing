import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IServicesProps } from './IServicesProps';
import { Title } from '../title/Title';

import './services.module.scss';
import { ServiceItem } from '../service-item/ServiceItem';

export class Services extends React.Component<IServicesProps, null> {
    render() {
        return(        
        <div className={'container' + (this.props.isBlock ? ' article-block' : '')}>
            <Title value={this.props.title} />
            <div className="row">
                {this.props.services.map((serviceColumn, index) => <div className="col-md-4 services__column" key={index}>
                    <ul>
                        {serviceColumn.map((service) =><li key={service.title}><ServiceItem {...service} /></li>)}
                    </ul>
                </div>)}
            </div>
        </div>
        )
    }
}