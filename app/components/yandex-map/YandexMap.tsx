import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './yandex-map.module.scss';
import { IYandexMapProps } from './IYandexMapProps';

export class YandexMap extends React.Component<IYandexMapProps,null> {
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.standard&mode=release";
        script.async = true;
        script.onload = this.onScriptLoad
        document.body.appendChild(script);
    }

    onScriptLoad = () => {
        const lat = this.props.coordinates.lattitude;
        const long = this.props.coordinates.longitude;

        ymaps.ready(function () {
            try {
                var map = new ymaps.Map('yandex-map', {
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
        return (<div className="container-fluid yandex-map">
            <div id="yandex-map" className={this.props.isBigMap ? "yandex-map" : "yandex-map-small"}></div>
        </div>)
    }
}