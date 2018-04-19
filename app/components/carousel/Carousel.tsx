import * as React from "react";
import * as ReactDOM from 'react-dom';

import './carousel.module.scss';
import { CarouselItem } from "../carousel-item/CarouselItem";
import { ICarouselProps } from "./ICarouselProps";

export class Carousel extends React.Component<ICarouselProps, null> {
    render() {
        return (
            <div className="carousel container-fluid">
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        {this.props.items.map((item, index) =><li data-target="#carouselIndicators" data-slide-to={index} className={(index===0 && 'active')}></li> )}
                    </ol>
                    <div className="carousel-inner">
                        {this.props.items.map((item) => <CarouselItem {...item} />)}
                    </div>
                </div>
            </div>
        );
    }
}