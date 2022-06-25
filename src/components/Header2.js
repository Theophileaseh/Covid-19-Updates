import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GiReturnArrow } from 'react-icons/gi';

const Header2 = () => {
  // eslint-disable-next-line global-require
  const logo = require('../assets/covid-logo.png');
  return (
    <div className="header">
      <div className="logo-sec">
        <img src={logo} alt="Covid-19 Updates" className="covid-logo" />
      </div>
      <div className="links">
        <Link to="/">
          <GiReturnArrow className="menu-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header2;
