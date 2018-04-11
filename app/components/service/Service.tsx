import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IService } from '../../shared/interfaces/IService';

import './service.module.scss';

export class Service extends React.Component<IService, null> {
    render() {
        return(        
        <div className='service-item'>
            <a href={window.location.origin + '/pages/services/' + this.props.pageName}>{this.props.title}</a>
        </div>
        )
    }
}