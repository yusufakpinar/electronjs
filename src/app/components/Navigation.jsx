import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <React.Fragment>
    <ul>
      <li><Link to="/">Electron Nedir?</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/sample">Sample</Link></li>
    </ul>
  </React.Fragment>
);

export default Navigation;
