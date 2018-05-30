import * as React from "react";
import * as ReactDOM from 'react-dom';

import './aboutus.module.scss';
import { Title } from "../title/Title";

const WhoWeAre = {
    firstPart: 'Наша клиника задумана как совместная организация с Ижевской Государственной Медицинской Академией, где профессора и доктора медицинских наук могут оказать консультацию любому человеку. Специализацией больницы является оказание психотерапевтической помощи широкого профиля.',
    secondPart: 'Главной задачей Клинической Больницы Восстановительной Медицины Ижевской Государственной Медицинской Академии является восстановление организма при хронических органических и психосоматических состояниях.'
}

const Promo = [
    { iconName: "fa-user-md", title: "Квалифицированный персонал", comment: "Консультация профессорского состава Ижевской Государственной Медицинской Академии. Внимание и бережное отношение к Вашему здоровью. У нас нет желания залечить Вас, нам важно найти истинную причину болезни, а не кормить симптомы таблетками!" },
    { iconName: "fa-skype", title: "Skype-консультация", comment: "У нас вы можете получить консультацию психолога через Skype, даже если Вы находитесь в другой стране." },
    { iconName: "fa-heartbeat", title: "Психосоматика", comment: "Наша клиника единственная в регионе по лечению психосоматических растройств." }
]

const Licenses = [
    { name: "license1.jpg" },
    { name: "license2.jpg" },
    { name: "license3.jpg" },
    { name: "license4.jpg" },
    { name: "license5.jpg" }
]

export class AboutUs extends React.Component<null, null> {
    render() {
        return (
            <div className="about-us-page">
                <div className="container">
                    <Title value="О клинике" />
                    <div className="who-we-are__text">
                        <div>
                            {WhoWeAre.firstPart}
                        </div>
                        <div>
                            {WhoWeAre.secondPart}
                        </div>
                    </div>
                    <div className="about">
                        <h2>Почему люди выбирают именно нас</h2>
                        <ul>
                            {Promo.map((item) => <li key={item.title} className="d-flex">
                                <div className="icon">
                                    <i className={"fa fa-4x sr-icons color-primary " + item.iconName}></i>
                                </div>
                                <div className="text">
                                    <h4 className="">{item.title}</h4>
                                    <div className="">{item.comment}</div>
                                </div>
                            </li>)}
                        </ul>
                    </div>
                    <div className="license">
                        <h2>Лицензия</h2>
                        <div className="d-flex flex-wrap">
                            {Licenses.map((item) =><div key={item.name}>
                                <a href={"../img/license/fullsize/" + item.name}>
                                    <img src={"../img/license/thumbnails/" + item.name} />
                                </a>
                            </div>)}                   
                        </div>
                    </div>
                    <div className="price">
                        <h2>Стоимость услуг</h2>
                        <iframe src="https://drive.google.com/file/d/1z8JO7JCMi0UE-8XZEKPEgCCgXtNPdbhL/preview" width="100%" height="500"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}