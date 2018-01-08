import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route, Link
  } from 'react-router-dom';
import Routes from './routes';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Prism from 'prismjs';
import '../static/style/index.scss';

/*import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();*/

ReactDOM.render(
    <Router>
        <div className="container">
            {/* <Intro/> */}
            <div id="sideNav">
                <div id="logo"><Link to=""><img src="static/img/logo.svg" alt="Electron Sunumu"/></Link></div>
                <Navigation/>
            </div>
            <div id="views"><Routes /></div>
        </div>
    </Router>,
    document.getElementById('app')
);