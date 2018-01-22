import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PageFooter } from './components/page-footer/PageFooter';

const FooterLinks = [
    {
        title: "Политика по персональным данным",
        address: window.location.origin + '/pages/personal-info.html'
    }
]

ReactDOM.render(<PageFooter links={FooterLinks}/>, document.getElementById('footer'));