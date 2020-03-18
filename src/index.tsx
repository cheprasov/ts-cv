import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom'
import Application from './components/Application';
import { CVInf } from './type/cv';

import cv from './cv.json';
import './index.scss';

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
