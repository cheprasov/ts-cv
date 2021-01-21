import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom'
import Application from './components/Application';
import { CVInf } from './type/cv';
import { lexemesSingleton } from './lexemes/Lexemes';
import { ELexemes } from './lexemes/ELexemes';
import Repos from './repos/Repos';

import cv from './cv.json';
import './index.scss';


Repos.getRepos().then(data => {
    const count = Math.floor((data.total || 610000) / 1000);
    lexemesSingleton.set(ELexemes.REPOS_DOWNLOADS, `${count}k`);
}).catch(() => {
    lexemesSingleton.set(ELexemes.REPOS_DOWNLOADS, '610k');
});

const initRouter = () => {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route exact render={() => <Application cv={cv as CVInf} />} />
            </Switch>
        </HashRouter>
    );
};

ReactDOM.render(initRouter(), document.getElementById('app-react'));
