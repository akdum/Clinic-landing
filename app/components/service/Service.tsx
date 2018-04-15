import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IService } from '../../shared/interfaces/IService';
import { Title } from '../title/Title';

export class Service extends React.Component<IService, null> {
    render() {
        return(        
        <div className='container'>
            <Title value={this.props.title} />
        </div>
        )
    }
}