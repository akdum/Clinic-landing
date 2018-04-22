import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';
import { IHeaderProps } from './IHeaderProps';
import { ApplyConsultation } from '../apply-consultation/ApplyConsultation';
import { IHeaderState } from './IHeaderState';

export class Header extends React.Component<IHeaderProps,IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);        
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll(event: any) {
        this.setState({
            isScrolled: event.currentTarget.pageYOffset > document.querySelector(".navbar").clientHeight
        });
    };
    
    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-light" + (this.state.isScrolled ? " fixed-top fixed-navbar-correction" : "")}>
                <a className="navbar-brand d-flex" href="/">
                    <div className="clinic-logo"></div>
                    <div className="clinic-logo-title color-primary">
                        <div className="clinic-title">Клиническая больница восстановительной медицины</div>
                        <div className="clinic-academy">ФГБОУ ВО "Ижевская государственная медицинская академия МЗ РФ"</div>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-pills nav-fill">
                        {this.props.links.map((link) => <a key={link.title} className="nav-item nav-link color-primary" href={link.address}>{link.title}</a>)}
                    </div>
                </div>
                <ApplyConsultation />
            </nav>
        );
    }
}