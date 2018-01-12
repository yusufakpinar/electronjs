import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <React.Fragment>
    <ul>
      <li><Link to="/">Electron Nedir?</Link></li>
      <li><Link to="/applications">Popüler Uygulamalar</Link></li>
      <li><Link to="/start">Electron'a Giriş</Link></li>
      <li><Link to="/devtools">DevTools Kurulumu</Link></li>
      <li><Link to="/app-browser">App, BrowserWindow</Link></li>
      <li><Link to="/ipc">IPC</Link></li>
      <li><Link to="/dock-menu">DEI</Link></li>
      <li><Link to="/shortcuts">Shortcuts</Link></li>
      <li><Link to="/menus">Menus</Link></li>
      <li><Link to="/app-distribution">Application Distribution</Link></li>
      <li><Link to="/packager">Electron Packager</Link></li>
      <li><Link to="/app-update">Updating Application</Link></li>
      <li><Link to="/the-end">The End</Link></li>
    </ul>
  </React.Fragment>
);

export default Navigation;
