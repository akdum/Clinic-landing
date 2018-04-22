import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Title } from "../title/Title";
import { IHeroProps } from "./IHeroProps";
import { HeroRow } from "../hero-row/HeroRow";

import './hero.module.scss';

export class Hero extends React.Component<IHeroProps, null> {
    render() {
        return (
            <div className="container hero">
                <Title value={this.props.title} />
                {this.props.rows.map((row) => <HeroRow {...row} />)}
            </div>
        );
    }
}