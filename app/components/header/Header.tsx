import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';
import { IHeaderProps } from './IHeaderProps';

export class Header extends React.Component<IHeaderProps,null> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-brand d-flex">
                    <div className="clinic-logo"></div>
                    <div className="clinic-logo-title color-primary">
                        <div className="clinic-title">Клиническая больница восстановительной медицины</div>
                        <div className="clinic-academy">ФГБОУ ВО "Ижевская государственная медицинская академия МЗ РФ"</div>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav row">
                        {this.props.links.map((link) => <a key={link.title} className="nav-item nav-link col-md-2 text-center color-primary" href={link.address}>{link.title}</a>)}
                    </div>
                </div>
            </nav>
        );
    }
}