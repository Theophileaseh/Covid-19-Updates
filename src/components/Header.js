import React from 'react';
import { FiSettings } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  // eslint-disable-next-line global-require
  const logo = require('../assets/covid-logo.png');
  return (
    <div className="header">
      <div className="logo-sec">
        <img src={logo} alt="Covid-19 Updates" className="covid-logo" />
      </div>
      <div className="links">
        <FiSettings className="menu-icon" />
      </div>
    </div>
  );
};

export default Header;
