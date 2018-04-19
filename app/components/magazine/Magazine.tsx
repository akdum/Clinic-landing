import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Title } from "../title/Title";
import { IMagazine } from "../../shared/interfaces/IMagazine";
import { IMagazineProps } from "./IMagazineProps";

import './magazine.module.scss';

export class Magazine extends React.Component<IMagazineProps, null> {
    render() {
        const newMagazine = this.props.magazines && this.props.magazines[0];
        return(
            <div className="container magazine">
                <Title value='Журнал "Мединфо"' />
                <div className="row">
                    <div className="col-md-5 magazine__important">
                        <h4>Обратите внимание</h4>
                        <ul>
                        {newMagazine.links.map((link) => <li>
                            <a href={window.location.origin + link.address}>{link.title}</a>
                        </li>)}
                        </ul>
                    </div>
                    <div className="col-md-7 magazine__image">
                        <h4>Новый номер</h4>
                        <div>
                            <img src={window.location.origin + '/img/med-info/' + newMagazine.imgName} />
                        </div>
                    </div>
                </div>
                <div className="magazine__archive">
                    <h2>Архивные номера</h2>
                    <div>
                        <ul>
                            {this.props.magazines.map((item, index) => {index !== 0 && <li>
                                <a href={window.location.origin + item.address}>{item.title}</a>
                            </li>})}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}