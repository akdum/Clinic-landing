import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './contacts.module.scss';
import { IContacts } from '../../shared/interfaces/IContacts';
import { YandexMap } from '../yandex-map/YandexMap';
import { Title } from '../title/Title';

export class Contacts extends React.Component<IContacts, null> {
    render() {
        return (
            <div>
                <div className="contacts-page">
                    <div className="container">
                        <Title value="Контакты" />
                        <div>
                            <div className="contacts-address">
                                <div>
                                    <span>{this.props.address}</span>
                                </div>
                            </div>
                            <div className="contacts-pnones">
                                <h2>Запись по телефонам</h2>
                                <div>
                                    {this.props.phones.map((phone)=><span key={phone}>{phone}</span>)}
                                </div>
                            </div>
                            <div className="contacts-email">
                                <h2>Адрес почты</h2>
                                <div>
                                    <a href={"mailto:" + this.props.email}>{this.props.email}</a>
                                </div>
                            </div>
                            <div className="contacts-work-hours">
                                <h2>Режим работы</h2>
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