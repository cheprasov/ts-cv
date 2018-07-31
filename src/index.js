import React from 'react';
import ReactDOM from 'react-dom';
import '/CSS/base.css';

import { Switch, Route, HashRouter as Router} from 'react-router-dom'

import ApplicationOrigin from './components/origin/application.js';
import ApplicationShort from './components/short/application.js';

const initRouter = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route path="/origin" exact render={() => <ApplicationOrigin />}/>
                <Route path="/short" exact render={() => <ApplicationShort />}/>
                <Route render={() => <ApplicationShort />} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(initRouter(), document.getElementById("app-react"));
