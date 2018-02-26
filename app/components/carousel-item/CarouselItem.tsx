import * as React from "react";
import * as ReactDOM from 'react-dom';
import { ICarouselItem } from "../../shared/interfaces/ICarouselItem";

export class CarouselItem extends React.Component<ICarouselItem, null> {
    render() {
        return (
            <div className={"carousel-item" + (this.props.isActive ? " active" : "")}>
                <div className="carousel-item__data carousel-item__data-left color-primary carousel-caption d-none d-md-block">
                    <div className="carousel-item__title">
                        <h1>{this.props.heading}</h1>
                    </div>
                    <div className="carousel-item__text" dangerouslySetInnerHTML={{__html: this.props.text}}>
                    </div>
                    <div className="carousel-item__open-btn">
                        <button type="button" className="btn btn-primary btn-lg bg-btn btn-border color-white exams-btn">Подробнее</button>
                    </div>
                </div>
                <img className="d-block w-100" src={"./img/carousel/" + this.props.imgName} alt="" />
            </div>
        );
    }
}