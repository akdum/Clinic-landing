import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IService } from '../../shared/interfaces/IService';
import { Title } from '../title/Title';

import './service.module.scss';

export class Service extends React.Component<IService, null> {
    render() {
        return(        
        <div className='container'>
            <Title value={this.props.title} />
            <div className="service-content" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
        </div>
        )
    }
}