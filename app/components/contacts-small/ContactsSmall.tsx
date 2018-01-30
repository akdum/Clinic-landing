import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IContacts } from '../../shared/interfaces/IContacts';
import { YandexMap } from '../yandex-map/YandexMap';

export class ContactsSmall extends React.Component<IContacts, null> {
    render() {
        return (<YandexMap isBigMap={true} coordinates={this.props.coordinates} />)
    }
}