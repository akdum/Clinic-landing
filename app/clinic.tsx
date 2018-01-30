import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PageFooter } from './components/page-footer/PageFooter';
import { YandexMetrika } from './components/yandex-metrika/YandexMetrika';
import { Header } from './components/header/Header';
import { Feedbacks } from './components/feedbacks/Feedbacks';
import { IFeedback } from './shared/interfaces/IFeedback';
import { ILink } from './shared/interfaces/ILink';
import { Contacts } from './components/contacts/Contacts';
import { IContacts } from './shared/interfaces/IContacts';
import { ContactsSmall } from './components/contacts-small/ContactsSmall';

const HeaderLinks: ILink[] = [
    {
        title: "О клинике",
        address: window.location.origin + '/pages/about-us.html'
    },
    {
        title: "Врачи",
        address: window.location.origin + '/pages/doktors.html'
    },
    {
        title: "Услуги",
        address: window.location.origin + '/pages/services.html'
    },
    {
        title: "Отзывы",
        address: window.location.origin + '/pages/feedbacks.html'
    },
    {
        title: "Контакты",
        address: window.location.origin + '/pages/contacts.html'
    }
]

const FooterLinks: ILink[] = [
    {
        title: "Политика по персональным данным",
        address: window.location.origin + '/pages/personal-info.html'
    }
]

const FeedbackData: IFeedback[] = [
    {
        title: "Все, как всегда, на высоком уровне.",
        text: 'Все, как всегда, на высоком уровне. Большое спасибо доктору Ильину (неврология) за верный диагноз и назначение лечения.',
        author: 'Инна, Москва'
    },
    {
        title: "Прекрасный доктор Медведева Анастасия Владимировна",
        text: 'Прекрасный доктор Медведева Анастасия Владимировна. Очень внимательна к пациенту, её интересует вся история возникновения проблемы, не упускает никаких мелочей, ей важно "докопаться" до истоков возникновения болей, чтобы правильно назначить всестороннее обследование и помочь пациенту с грамотными назначениями лечения. СПАСИБО!!!',
        author: 'Anonym'
    },
    {
        title: "СПАСИБО ДОКТОРУ НИКОЛАЮ ИЛЬИНУ!",
        text: 'Врач Ильин, второй прием, было много жалоб, не упустил ни одной по итогам обследования, четкий план действий, очень внимательный! Спасибо!',
        author: 'Елена, Москва'
    }
]

const ContactsData: IContacts = {
    isContactsPage: true,
    coordinates: {lattitude: 56.86211253, longitude: 53.28120296},
    address: 'г. Ижевск, ул. Труда, 48а',
    phones: ['8(3412)23-33-25','8(3412)64-67-06','8(909)053-87-53'],
    workHours: ['Будни - с 09-00 до 18-00', 'Суббота, Воскресенье - Закрыто']
}

ReactDOM.render(<YandexMetrika />, document.getElementById('yandexMetrika'));
ReactDOM.render(<Header links={HeaderLinks} />, document.getElementById('header'));
if (document.querySelector("#feedbacks")) {
    ReactDOM.render(<Feedbacks feedbacks={FeedbackData} />, document.getElementById('feedbacks'));
}
if (document.querySelector("#contacts-page")) {
    ReactDOM.render(<Contacts {... ContactsData} />, document.getElementById('contacts-page'));
}
if (document.querySelector("#contacts")) {
    ReactDOM.render(<ContactsSmall {... ContactsData} />, document.getElementById('contacts'));
}
ReactDOM.render(<PageFooter links={FooterLinks}/>, document.getElementById('footer'));