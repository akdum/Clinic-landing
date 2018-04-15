import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IService } from './shared/interfaces/IService';
import { Service } from './components/service/Service';
import {servicesData} from '../app/data/services';
import { IServiceSection } from './shared/interfaces/IServiceSection';

const allFlatServices:IService[][] = servicesData.map((section: IServiceSection) => section.services);
const flatServices:IService[] = [].concat(...allFlatServices);
const service:IService = flatServices.find((item:IService) => item.pageName === (window.location.pathname.split('/').slice(-1)[0]));
service.title = 'О направлении';

if (document.querySelector("#service")) {
    ReactDOM.render(<Service {...service} />, document.getElementById('service'));
}