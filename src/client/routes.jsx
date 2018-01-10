import React from 'react';
import {
  BrowserRouter as Router,
  Route, IndexRoute
} from 'react-router-dom';
import {WhatElectron,Applications,Start,DevTools,AppBrowser,Ipc,DockMenu,Shortcuts} from './views/';
//import 'styles/index.scss';

const Routes = () => (
  <div className="content">
      <Route exact path="" component={Shortcuts}/>
      <Route exact path="/" component={WhatElectron}/>
      <Route path="/applications" component={Applications}/>
      <Route path="/start" component={Start}/>
      <Route path="/devtools" component={DevTools}/>
      <Route path="/app-browser" component={AppBrowser}/>
      <Route path="/ipc" component={Ipc}/>
      <Route path="/dock-menu" component={DockMenu}/>
      <Route path="/shortcuts" component={Shortcuts}/>
  </div>
);

export default Routes;
