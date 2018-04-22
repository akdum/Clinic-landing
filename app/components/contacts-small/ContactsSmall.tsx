import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IContacts } from '../../shared/interfaces/IContacts';
import { YandexMap } from '../yandex-map/YandexMap';

import './contacts-small.module.scss';

export class ContactsSmall extends React.Component<IContacts, null> {    
    render() {
        return (<div className="contacts-small">
                    <div className="contacts-layer">
                        <h1>Контакты</h1>
                        <div className="contact-item">
                            <h4>Адрес:</h4>
                            <div>{this.props.address}</div>
                        </div>
                        <div className="contact-item">
                            <h4>Почта:</h4>
                            <div><a href={"mailto:" + this.props.email}>{this.props.email}</a></div>
                        </div>
                        <div className="contact-item">
                            <h4>Телефоны:</h4>
                            {this.props.phones.map((phone) => <div key={phone}><a href={"tel:" + phone}>{phone}</a></div>)}
                        </div>
                    </div>
                    <YandexMap isBigMap={true} coordinates={this.props.coordinates} />
                </div>)
    }
}