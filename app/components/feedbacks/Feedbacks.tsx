import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './feedbacks.module.scss';

import { IFeedbacksProps } from './IFeedbacksProps';
import { Feedback } from '../feedback/Feedback';

export class Feedbacks extends React.Component<IFeedbacksProps,null> {
    render() {
        return (
            <div className="container">
                <div className="title-block">
                    <h1>Отзывы</h1>
                </div>
                <ul className="feedbacks-list">
                    {this.props.feedbacks.map((feedback) => <li><Feedback feedback={feedback} /></li>)}
                </ul>
            </div>
        )
    }
}