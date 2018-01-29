import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IContactsProps } from './IContactsProps';

import './contacts.module.scss';

export class Contacts extends React.Component<IContactsProps, null> {
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.standard&mode=release";
        script.async = true;
        script.onload = this.onScriptLoad
        document.body.appendChild(script);
    }

    onScriptLoad = () => {
        const lat = this.props.lattitude;
        const long = this.props.longitude;

        ymaps.ready(function () {
            try {
                var map = new ymaps.Map('contacts-map', {
                    center: [lat, long],
                    zoom: 16
                });
                map.behaviors.disable('scrollZoom');
                map.geoObjects.add(new ymaps.Placemark([lat, long], {
                    hintContent: 'Клиническая больница восстановительной медицины'
                }));
            } catch (error) {
                console.log(error);
            }
        });
    }

    render() {
        return (
            <div>
                <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.standard&mode=release" onLoad={this.onScriptLoad} />
                {this.props.isContactsPage ? (
                    <div className="contacts-page">
                        <div className="container">
                            <div className="title-block">
                                <h1>Контакты</h1>
                            </div>
                            <div>
                                <div className="contacts-address"><h3>{this.props.address}</h3></div>
                                <div className="contacts-pnones">
                                    <h3>Запись по телефонам</h3>                                    
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid contacts-map">
                            <div id="contacts-map" className=""></div>
                        </div>
                    </div>)
                    : (
                        <div className="container-fluid">
                        </div>
                    )}
            </div>
        )
    }
}