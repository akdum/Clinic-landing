import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../../shared/augmentation/react';
import { Helmet } from 'react-helmet';

export class PageHead extends React.Component<null,null> {
    render() {
        return (
            <Helmet>
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="психотерапевт ижевск, клиника восстановительной медицины ижевск, психолог ижевск, мануальный терапевт ижевск" />
                <title>ФГБОУ ВО "Ижевская государственная медицинская академия МЗ РФ" клиническая больница восстановительной медицины</title>
                <meta name="description" content="Клиническая больница восстановительной медицины при Ижевской Государственной Медицинской Академии." />
                <meta name="yandex-verification" content="5cbf5d462d873f37" />
                <link rel="shortcut icon" href="../img/favicon.ico" />                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Exo+2:300,400|Roboto:300|Open+Sans:400,600" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
        );
    }
}