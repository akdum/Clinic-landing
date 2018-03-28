import * as React from "react";
import * as ReactDOM from 'react-dom';

import './aboutussmall.module.scss';
import { IAboutUsSmall } from "./IAboutUsSmall";

const textValues = {
    title: "О клинике",
    text: "Наша клиника задумана как совместная организация с Ижевской Государственной Медицинской Академией, где профессора и доктора медицинских наук могут оказать консультацию любому человеку. Специализацией больницы является оказание психотерапевтической помощи широкого профиля."
}

export class AboutUsSmall extends React.Component<IAboutUsSmall, null> {
    render() {
        return (
            <div className="who-we-are">
                <div className="container">
                    <div className="who-we-are__title">
                        <h1>{textValues.title}</h1>
                    </div>
                    <div className="who-we-are__text">
                        {textValues.text}
                    </div>
                    <div className="who-we-are__next d-flex justify-content-center">
                        <a href={window.location.origin + '/pages/' + this.props.pageName} className="btn btn-primary btn-lg bg-btn btn-border color-white w-100">Подробнее</a>
                    </div>
                </div>
            </div>
        );
    }
}