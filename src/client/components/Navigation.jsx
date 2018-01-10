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
    </ul>
  </React.Fragment>
);

export default Navigation;
