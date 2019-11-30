import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom'
import Application from './components/Application';

import cv from './cv.json';

import './index.scss';
import { CVInf } from './type/cv';

const initRouter = () => {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route render={() => <Application cv={cv as CVInf} />} />
            </Switch>
        </HashRouter>
    );
};

ReactDOM.render(initRouter(), document.getElementById('app-react'));
