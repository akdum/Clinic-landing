import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Title } from "../title/Title";
import { IHeroProps } from "./IHeroProps";

export class Hero extends React.Component<IHeroProps, null> {
    render() {
        return (
            <div className="container">
                <Title value={this.props.title} />
            </div>
        );
    }
}