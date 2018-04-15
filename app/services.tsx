import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IService } from './shared/interfaces/IService';
import { Service } from './components/service/Service';

interface IServiceDocument extends Document {
    service: IService;
}


declare const document: IServiceDocument;
const service: IService = document.service;

if (document.querySelector("#service")) {
    ReactDOM.render(<Service {...service} />, document.getElementById('service'));
}