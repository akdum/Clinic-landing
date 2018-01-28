import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IFeedbackProps } from './IFeedbackProps';

import './feedback.module.scss';

export class Feedback extends React.Component<IFeedbackProps,null> {
    render() {
        return (
            <div className="feedback">
                <div className="feedback-title">
                    <h3>{this.props.feedback.title}</h3>
                </div>
                <div className="feedback-text-author">
                    <div className="feedback-text">{this.props.feedback.text}</div>
                    <div className="feedback-author">{this.props.feedback.author}</div>
                </div>
            </div>
        )
    }
}