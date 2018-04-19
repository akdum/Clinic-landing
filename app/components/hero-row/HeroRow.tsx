import * as React from "react";
import * as ReactDOM from 'react-dom';
import { IHeroRow } from "../../shared/interfaces/IHeroRow";

import './herorow.module.scss';

export class HeroRow extends React.Component<IHeroRow,null> {
    render() {
        return (
            <div className="row">
                <div className={"col-md-7 col-sm-12 " + this.props.imgOrder}>
                    <img className="hero-element__img" src={"../../img/heroes/" + this.props.imgName} />
                </div>
                <div className={"col-md-5 col-sm-12 " + this.props.textOrder}>
                    <div className="hero-element__title">
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="hero-element__text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                </div>
            </div>
        );
    }
}