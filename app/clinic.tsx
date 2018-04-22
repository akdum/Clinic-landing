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
import {feedbackData} from './data/feedbacks';
import {servicesData} from './data/services';
import {doctorsData} from './data/doctors';
import {magazinesData} from './data/magazines';
import {carouselData} from './data/carousel';
import { ServicesBlocks } from './components/services-blocks/ServicesBlocks';
import { Legal } from './components/legal/Legal';
import { Magazine } from './components/magazine/Magazine';

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

const services = {
    title: 'Что мы лечим',
    isBlock: true,
    services: [
        [servicesData[0].services[0], servicesData[0].services[1], servicesData[0].services[2], servicesData[0].services[3]],
        [servicesData[0].services[4], servicesData[0].services[5], servicesData[0].services[6]],
        [servicesData[0].services[7], servicesData[1].services[0]]
    ]
}

const DoctorsData: IDoctor[][] =[
    [doctorsData[0],doctorsData[1],doctorsData[2],doctorsData[3]],
    [doctorsData[4],doctorsData[5],doctorsData[6],doctorsData[7]],
    [doctorsData[8], doctorsData[9]]
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

const ContactsData: IContacts = {
    isContactsPage: true,
    coordinates: {lattitude: 56.86211253, longitude: 53.28120296},
    address: 'г. Ижевск, ул. Труда, 48а',
    phones: ['8(3412)23-33-25','8(3412)64-67-06','8(909)053-87-53'],
    workHours: ['Будни - с 09-00 до 18-00', 'Суббота, Воскресенье - Закрыто'],
    email: 'centr_psy@mail.ru'
}

const ServicesPage = {
    title: 'Услуги',
    blocks: servicesData
}

const aboutUsPageName = "about-us.html";

ReactDOM.render(<PageHead />, document.getElementById('pageHead'));
ReactDOM.render(<YandexMetrika />, document.getElementById('yandexMetrika'));
ReactDOM.render(<Header links={HeaderLinks} />, document.getElementById('header'));
if (document.querySelector("#carousel")) {
    ReactDOM.render(<Carousel items={carouselData} />, document.getElementById('carousel'));
}
if (document.querySelector("#aboutUs")) {
    ReactDOM.render(<AboutUs />, document.getElementById('aboutUs'));
}
if (document.querySelector("#who-we-are")) {
    ReactDOM.render(<AboutUsSmall pageName={aboutUsPageName}/>, document.getElementById('who-we-are'));
}
if (document.querySelector("#services")) {
    ReactDOM.render(<Services {...services} />, document.getElementById('services'));
}
if (document.querySelector("#doctors")) {
    ReactDOM.render(<Doctors {...DoctorsMainPage} />, document.getElementById('doctors'));
}
if (document.querySelector("#doctors-all")) {
    ReactDOM.render(<Doctors {...DoctorsPage} />, document.getElementById('doctors-all'));
}
if (document.querySelector("#feedbacks")) {
    ReactDOM.render(<Feedbacks feedbacks={feedbackData} />, document.getElementById('feedbacks'));
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
if (document.querySelector("#services-blocks")) {
    ReactDOM.render(<ServicesBlocks {...ServicesPage} />, document.getElementById('services-blocks'));
}
if (document.querySelector("#legal")) {
    ReactDOM.render(<Legal />, document.getElementById('legal'));
}
if (document.querySelector("#magazine")) {
    ReactDOM.render(<Magazine magazines={magazinesData} />, document.getElementById('magazine'));
}
ReactDOM.render(<PageFooter links={FooterLinks}/>, document.getElementById('footer'));