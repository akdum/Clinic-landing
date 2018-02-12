import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './contacts.module.scss';
import { IContacts } from '../../shared/interfaces/IContacts';
import { YandexMap } from '../yandex-map/YandexMap';

export class Contacts extends React.Component<IContacts, null> {
    render() {
        return (
            <div>
                <div className="contacts-page">
                    <div className="container">
                        <div className="title-block">
                            <h1>Контакты</h1>
                        </div>
                        <div>
                            <div className="contacts-address"><h3>{this.props.address}</h3></div>
                            <div className="contacts-pnones">
                                <h3>Запись по телефонам</h3>
                                <div>
                                    {this.props.phones.map((phone)=><span key={phone}>{phone}</span>)}
                                </div>
                            </div>
                            <div className="contacts-email">
                                <h3>Адрес почты</h3>
                                <div>
                                    <a href={"mailto:" + this.props.email}>{this.props.email}</a>
                                </div>
                            </div>
                            <div className="contacts-work-hours">
                                <h3>Режим работы</h3>
                                <div>
                                    {this.props.workHours.map((hours)=><div key={hours}>{hours}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <YandexMap coordinates={this.props.coordinates} isBigMap={false} />
                </div>
            </div>
        )
    }
}