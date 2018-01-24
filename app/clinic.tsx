import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PageFooter } from './components/page-footer/PageFooter';
import { YandexMetrika } from './components/yandex-metrika/YandexMetrika';

const FooterLinks = [
    {
        title: "Политика по персональным данным",
        address: window.location.origin + '/pages/personal-info.html'
    }
]

ReactDOM.render(<YandexMetrika />, document.getElementById('yandexMetrika'));
ReactDOM.render(<PageFooter links={FooterLinks}/>, document.getElementById('footer'));