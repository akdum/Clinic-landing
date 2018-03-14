import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from '../title/Title';

import './applyConsultationForm.module.scss';

export class ApplyConsultationForm extends React.Component<null,null> {
    render() {
        return (
            <div className="container">
                <Title value="Записаться на консультацию" />
                <div className="">
                    <div className="alert alert-warning" role="alert">
                        Заявки обрабатываются с 9.00 до 18.00
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputName" placeholder="ФИО" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="password" className="form-control" id="inputPhone" placeholder="Телефон" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg bg-btn btn-border color-white form_submitBtn">Отправить</button>
                    <div className="alert alert-primary form__personalInfo" role="alert">
                        Нажимая на кнопку, я принимаю условия обработки персональных данных.
                    </div>
                </form>
            </div>
        );
    }
}