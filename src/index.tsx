import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Application from './components/Application';
import { CVInf } from './type/cv';
import { lexemesSingleton } from './lexemes/Lexemes';
import { ELexemes } from './lexemes/ELexemes';
import Repos from './repos/Repos';

import cv from './cv.json';
import './index.scss';


Repos.getRepos().then(data => {
    const million = Math.round(data.total / 10_000) / 100;
    lexemesSingleton.set(ELexemes.REPOS_DOWNLOADS, `${million} million`);
}).catch(() => {
    lexemesSingleton.set(ELexemes.REPOS_DOWNLOADS, '1 million');
});

const initRouter = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Application cv={cv as CVInf} />} />
            </Routes>
        </HashRouter>
    );
};

ReactDOM.render(initRouter(), document.getElementById('app-react'));
