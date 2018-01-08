import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route, IndexRoute, IndexRedirect
  } from 'react-router-dom';
import Routes from './routes';
import Navigation from './components/Navigation';
// import 'normalize.css';
import Prism from 'prismjs';
import '../static/style/index.scss';

ReactDOM.render(
    <Router>
        <div className="container">
            <div id="sideNav">
                <div id="logo"><img src="static/img/logo.svg" alt="Electron Sunumu"/></div>
                <Navigation/>
            </div>
            <div id="views"><Routes /></div>
        </div>
    </Router>,
    document.getElementById('app')
);

