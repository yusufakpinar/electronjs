import React from 'react';
import {
  BrowserRouter as Router,
  Route, IndexRoute
} from 'react-router-dom';
import {WhatElectron,Applications,Start,DevTools,AppBrowser,Ipc,DockMenu,Shortcuts,Menus,AppDistribution,Packager,AppUpdate,TheEnd} from './views/';

const Routes = () => (
  <div className="content">
      <Route exact path="/" component={WhatElectron}/>
      <Route path="/applications" component={Applications}/>
      <Route path="/start" component={Start}/>
      <Route path="/devtools" component={DevTools}/>
      <Route path="/app-browser" component={AppBrowser}/>
      <Route path="/ipc" component={Ipc}/>
      <Route path="/dock-menu" component={DockMenu}/>
      <Route path="/shortcuts" component={Shortcuts}/>
      <Route path="/menus" component={Menus}/>
      <Route path="/app-distribution" component={AppDistribution}/>
      <Route path="/packager" component={Packager}/>
      <Route path="/app-update" component={AppUpdate}/>
      <Route path="/the-end" component={TheEnd}/>
  </div>
);

export default Routes;
