import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from "../title/Title";

export class Prices extends React.Component<null,null> {
    render() {
        return (
            <div className="container">
                <Title value="Цены" />
                <iframe src="https://drive.google.com/file/d/1z8JO7JCMi0UE-8XZEKPEgCCgXtNPdbhL/preview" width="100%" height="700"></iframe>
            </div>
        );
    }
}