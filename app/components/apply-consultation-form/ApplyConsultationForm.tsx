import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from '../title/Title';

import './applyConsultationForm.module.scss';
import { IApplyConsultationFormState } from './IApplyConsultationFormState';
import { SendGridApi } from '../../shared/api/SendGridApi';

export class ApplyConsultationForm extends React.Component<null,IApplyConsultationFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            name: "",
            phone: "",
            sentSuccesful: false,
            wasSent: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    async handleSubmit(event: any) {
        event.preventDefault();
        SendGridApi.SendMail(this.state);
        this.setState({
            wasSent: true
        })
    }

    render() {
        return (
            <div className="container">
                <Title value="Записаться на консультацию" />
                {!this.state.wasSent &&
                <div>
                    <div className="">
                        <div className="alert alert-warning" role="alert">
                            Заявки обрабатываются с 9.00 до 18.00
                        </div>
                    </div>
                    <form method="POST" id="book-form" action="https://api.sendgrid.com/api/mail.send.json" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputName" placeholder="ФИО" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputPhone" placeholder="Телефон" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg bg-btn btn-border color-white form_submitBtn">Отправить</button>
                        <div className="alert alert-primary form__personalInfo" role="alert">
                            Нажимая на кнопку, я принимаю условия обработки персональных данных.
                        </div>
                    </form>
                </div>
                }
                {this.state.wasSent && 
                <div>
                    <div className="alert alert-primary" role="alert">
                         Ваша заявка была успешно отправлена
                    </div>
                </div>
                }
            </div>
        );
    }
}