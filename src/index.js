import React from 'react';
import ReactDOM from 'react-dom';
import '/CSS/base.css';

import { Route, HashRouter as Router} from 'react-router-dom'

import ApplicationOrigin from './components/origin/application.js';
import ApplicationShort from './components/short/application.js';

const initRouter = () => {
    return (
        <Router basename="/">
            <div>
                <Route path="/" exact render={() => <ApplicationOrigin />}/>
                <Route path="/short" render={() => <ApplicationShort />}/>
            </div>
        </Router>
    );
};

ReactDOM.render(initRouter(), document.getElementById("app-react"));
