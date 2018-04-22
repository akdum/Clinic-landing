import * as React from "react";
import * as ReactDOM from 'react-dom';
import { ICarouselItem } from "../../shared/interfaces/ICarouselItem";

import './carouselItem.module.scss';
import { ICarouselItemProps } from "./ICarouselItemProps";

export class CarouselItem extends React.Component<ICarouselItemProps, null> {
    render() {
        return (
            <div className={"carousel-item" + (this.props.isActiveSlide ? " active" : "")}>
                <div className={"carousel-item__data color-primary carousel-caption d-none d-md-block" + (this.props.item.isLeftAlign ? " carousel-item__data-left" : " carousel-item__data-right")}>
                    <div className="carousel-item__title">
                        <h1>{this.props.item.heading}</h1>
                    </div>
                    <div className="carousel-item__text" dangerouslySetInnerHTML={{__html: this.props.item.text}}>
                    </div>
                    <div className="carousel-item__open-btn">
                        <a href={window.location.origin + '/pages/carousel/' + this.props.item.pageName} className="btn btn-primary btn-lg bg-btn btn-border color-white">Подробнее</a>
                    </div>
                </div>
                <img className="d-block w-100" src={"./img/carousel/" + this.props.item.imgName} alt="" />
            </div>
        );
    }
}