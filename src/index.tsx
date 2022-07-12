import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Application from './components/Application';
import { CVInf } from './type/cv';
import { lexemesSingleton } from './lexemes/Lexemes';
import { ELexemes } from './lexemes/ELexemes';
import Repos from './repos/Repos';

import cv from './cv.json';
import './index.scss';
import { getPeriod } from './utils/dateUtils';


Repos.getRepos().then(data => {
    const million = Math.round(data.total / 10_000) / 100;
    lexemesSingleton.set(ELexemes.REPOS_DOWNLOADS, `${million} million`);
}).catch(() => {
    lexemesSingleton.set(ELexemes.REPOS_DOWNLOADS, '1 million');
});

const age = getPeriod('1984-10-10', 'now', true)[2];

const initRouter = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Application cv={cv as CVInf} />} />
                <Route path="/age" element={age} />
            </Routes>
        </HashRouter>
    );
};

const root = createRoot(document.getElementById('app-react') as HTMLDivElement);
root.render(initRouter());
