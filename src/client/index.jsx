import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import Routes from './routes';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
// import 'normalize.css';
import Prism from 'prismjs';
import '../static/style/index.scss';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <div className="container">
            <Intro/>
            <div id="sideNav">
                <div id="logo"><img src="static/img/logo.svg" alt="Electron Sunumu"/></div>
                <Navigation/>
            </div>
            <div id="views"><Routes /></div>
        </div>
    </Router>,
    document.getElementById('app')
);