import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';

export class Header extends React.Component<null,null> {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand d-flex">
                    <div className="clinic-logo"></div>
                    <div className="clinic-logo-title">
                        <div className="clinic-title">Клиническая больница восстановительной медицины</div>
                        <div className="clinic-academy color-primary">ФГБОУ ВО "Ижевская государственная медицинская академия МЗ РФ"</div>
                    </div>
                </div>
            </nav>
        );
    }
}