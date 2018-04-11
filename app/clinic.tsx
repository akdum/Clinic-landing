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
import { PageHead } from './components/page-head/PageHead';
import { AboutUs } from './components/about-us/AboutUs';
import { Carousel } from './components/carousel/Carousel';
import { ApplyConsultationForm } from './components/apply-consultation-form/ApplyConsultationForm';
import { AboutUsSmall } from './components/about-us-small/AboutUsSmall';
import { IDoctor } from './shared/interfaces/IDoctor';
import { Doctors } from './components/doctors/Doctors';
import { Services } from './components/services/Services';


interface IExtexndedDocument extends Document {
    carousel: any;
}

declare const document: IExtexndedDocument;

const HeaderLinks: ILink[] = [
    {
        title: "О клинике",
        address: window.location.origin + '/pages/about-us.html'
    },
    {
        title: "Врачи",
        address: window.location.origin + '/pages/doctors.html'
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

const servicesData = {
    title: 'Что мы лечим',
    isBlock: true,
    services: [
        [
            {
                title: 'Депрессия',
                pageName: 'depressiya.html'
            },
            {
                title: 'Постстрессовые состояния',
                pageName: 'poststressovye-sostoyaniya.html'
            },
            {
                title: 'Зависимое поведение',
                pageName: 'zavisimoe-povedenie.html'
            }
        ],
        [
            {
                title: 'Нарушения пищевого поведения',
                pageName: 'narusheniya-pishchevogo-povedeniya.html'
            },
            {
                title: 'Невротические расстройства',
                pageName: 'nevroticheskie-rasstroystva.html'
            },
            {
                title: 'Пограничные личностные расстройства',
                pageName: 'pogranichnye-lichnostnye-rasstroystva.html'
            },
            {
                title: 'Психические расстройства позднего возраста ',
                pageName: 'psihicheskie-rasstroystva-pozdnego-vozrasta.html'
            }
        ],
        [
            {
                title: 'Расстройства шизофренического спектра',
                pageName: 'rasstroystva-shizofrenicheskogo-spektra.html'
            },
            {
                title: 'Тревожные и панические расстройства',
                pageName: 'trevozhnye-i-panicheskie-rasstroystva.html'
            }
        ]
    ]
}

const DoctorsData: IDoctor[][] =[
    [
        { photoName: "reverchuk.jpg", title: { surname: "Реверчук", name: "Игорь Васильевич", spec: "заведующий кафедрой, главный врач, профессор" }, fileName: "reverchuk.html"},
        { photoName: "rumyanceva.jpg", title: { surname: "Румянцева", name: "Наталья Анатольевна", spec: "врач-психотерапевт" }, fileName: "rumyanceva.html"},
        { photoName: "pomyitkina.jpg", title: { surname: "Помыткина", name: "Татьяна Юрьевна", spec: "психолог, семейный психолог, специалист по профоринтации, кандидат психологических наук" }, fileName: "pomyitkina.html" },
        { photoName: "shutov.jpg", title: { surname: "Шутов", name: "Игорь Леонидович", spec: "Врач ЛФК и спортивной медицины" }, fileName: "shutov.html" }
    ],
    [
        { photoName: "perevozchikov.jpg", title: { surname: "Перевозчиков", name: "Александр Павлович", spec: "врач-психотерапевт, специалист по БОС-ЭЭГ" }, fileName: "perevozchikov.html" },
        { photoName: "zagrtdinova-rizida.jpg", title: { surname: "Загртдинова", name: "Ризида Миннесагитовна", spec: "врач-дерматовенеролог-дерматолог-косметолог, заведующая кафедрой, профессор" }, fileName: "zagrtdinova-rizida.html" },
        { photoName: "pakriev.jpg", title: { surname: "Пакриев", name: "Сергей Галлинурович", spec: "врач-психиатр, доктор медицинских наук" }, fileName: "pakriev.html" },
        { photoName: "lyalin.jpg", title: { surname: "Лялин", name: "Андрей Николаевич", spec: "врач-психотерапевт" }, fileName: "lyalin.html" }
    ],
    [
        { photoName: "tutrumova.jpg", title: { surname: "Тютрюмова", name: "Елена Александровна", spec: "психолог-дефектолог, олигофренопедагог, детский психолог" }, fileName: "tutrumova.html" }
    ]
]

const DoctorsMainPage = {
    showSeeAll: true,    
    title: 'Врачи и персонал',
    doctorsRows: [DoctorsData[0]],
    pageName: 'doctors.html'
}

const DoctorsPage = {
    showSeeAll: false,    
    title: 'Врачи и персонал',
    doctorsRows: DoctorsData
}

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
    workHours: ['Будни - с 09-00 до 18-00', 'Суббота, Воскресенье - Закрыто'],
    email: 'centr_psy@mail.ru'
}

const aboutUsPageName = "about-us.html";

const carouselData = document.carousel;

ReactDOM.render(<PageHead />, document.getElementById('pageHead'));
ReactDOM.render(<YandexMetrika />, document.getElementById('yandexMetrika'));
ReactDOM.render(<Header links={HeaderLinks} />, document.getElementById('header'));
if (document.querySelector("#carousel")) {
    ReactDOM.render(<Carousel {...carouselData} />, document.getElementById('carousel'));
}
if (document.querySelector("#aboutUs")) {
    ReactDOM.render(<AboutUs />, document.getElementById('aboutUs'));
}
if (document.querySelector("#who-we-are")) {
    ReactDOM.render(<AboutUsSmall pageName={aboutUsPageName}/>, document.getElementById('who-we-are'));
}
if (document.querySelector("#services")) {
    ReactDOM.render(<Services {...servicesData} />, document.getElementById('services'));
}
if (document.querySelector("#doctors")) {
    ReactDOM.render(<Doctors {...DoctorsMainPage} />, document.getElementById('doctors'));
}
if (document.querySelector("#doctors-all")) {
    ReactDOM.render(<Doctors {...DoctorsPage} />, document.getElementById('doctors-all'));
}
if (document.querySelector("#feedbacks")) {
    ReactDOM.render(<Feedbacks feedbacks={FeedbackData} />, document.getElementById('feedbacks'));
}
if (document.querySelector("#contacts-page")) {
    ReactDOM.render(<Contacts {... ContactsData} />, document.getElementById('contacts-page'));
}
if (document.querySelector("#contacts")) {
    ReactDOM.render(<ContactsSmall {... ContactsData} />, document.getElementById('contacts'));
}
if (document.querySelector("#apply-consultation-form")) {
    ReactDOM.render(<ApplyConsultationForm />, document.getElementById('apply-consultation-form'));
}
ReactDOM.render(<PageFooter links={FooterLinks}/>, document.getElementById('footer'));