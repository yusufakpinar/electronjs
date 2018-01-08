import React from 'react';
import {
  BrowserRouter as Router,
  Route, IndexRoute
} from 'react-router-dom';
import {WhatElectron,Applications,Start,View_2} from './views/';
//import 'styles/index.scss';

const Routes = () => (
  <div className="content">
      {/* <Route exact path="" component={Start}/> */}
      <Route exact path="/" component={WhatElectron}/>
      <Route path="/applications" component={Applications}/>
      <Route path="/start" component={Start}/>
      <Route path="/about" component={View_2}/>
      {/* <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/> */}
  </div>
);

export default Routes;
