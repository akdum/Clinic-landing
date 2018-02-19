import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hero } from './components/hero/Hero';

interface IHeroDocument extends Document {
    hero: any;
}

declare const document: IHeroDocument;

const title = document.hero.title;
const rows = document.hero.rows;

ReactDOM.render(<Hero title={title} rows={rows}/>, document.getElementById('hero'));