import * as React from "react";
import * as ReactDOM from 'react-dom';

import './aboutus.module.scss';

const WhoWeAre = {
    firstPart: 'Наша клиника задумана как совместная организация с Ижевской Государственной Медицинской Академией, где профессора и доктора медицинских наук могут оказать консультацию любому человеку. Специализацией больницы является оказание психотерапевтической помощи широкого профиля.',
    secondPart: 'Главной задачей Клинической Больницы Восстановительной Медицины Ижевской Государственной Медицинской Академии является восстановление организма при хронических органических и психосоматических состояниях.'
}

const Promo = [
    { iconName: "fa-user-md", title: "Квалифицированный персонал", comment: "Консультация профессорского состава Ижевской Государственной Медицинской Академии. Внимание и бережное отношение к Вашему здоровью. У нас нет желания залечить Вас, нам важно найти истинную причину болезни, а не кормить симптомы таблетками!" },
    { iconName: "fa-skype", title: "Skype-консультация", comment: "У нас вы можете получить консультацию психолога через Skype, даже если Вы находитесь в другой стране." },
    { iconName: "fa-heartbeat", title: "Психосоматика", comment: "Наша клиника единственная в регионе по лечению психосоматических растройств." }
]

export class AboutUs extends React.Component<null, null> {
    render() {
        return (
            <div className="about-us-page">
                <div className="container">
                    <div className="title-block">
                        <h1>О клинике</h1>
                    </div>
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
                </div>
            </div>
        );
    }
}