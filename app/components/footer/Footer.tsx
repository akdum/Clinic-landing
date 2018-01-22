import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FooterLink } from '../footer-link/FooterLink';
import { ILinks } from '../../shared/interfaces/ILinks';

export class Footer extends React.Component<ILinks,null> {
    render() {
        return (
            <footer className="bg-primary color-white">
                <div className="copyright">© 2017 Клиническая больница восстановительной медицины. Все права защищены.</div>
                <div className="container-fluid">
                    <div className="row">
                    {this.props.links.map((link) => <FooterLink address={link.address} title={link.title} key={link.address + link.title} />)}
                    </div>
                </div>
            </footer>
        );
    }
}