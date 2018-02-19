import * as React from "react";
import * as ReactDOM from 'react-dom';
import { ITitleProps } from "./ITitleProps";

import './title.module.scss';

export class Title extends React.Component<ITitleProps, null> {
    render() {
        return (
            <div className="title-block">
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}