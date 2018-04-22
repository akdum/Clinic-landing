import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ILink } from '../../shared/interfaces/ILink';

export class FooterLink extends React.Component<ILink,null> {
    render() {
        return (
            <div className="col-md-6 col-sm-12 col-lg-4">
                <a href={this.props.address}>{this.props.title}</a>
            </div>
        );
    }
}