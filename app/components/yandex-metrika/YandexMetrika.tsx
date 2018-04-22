import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ym } from 'react-ym';

export class YandexMetrika extends React.Component<null,null> {
    componentDidMount() {
        ym.initialize("44724454");
    }

    render() {
        return (<span></span>);
    }
}