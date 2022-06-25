import React from 'react';
import './Footer.css';

const Footer = () => {
  // eslint-disable-next-line global-require
  const logo = require('../assets/covid-logo.png');
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Covid-19 Updates" className="covid-logo" />
      </div>
      <div className="footer-info">
        <p className="footer-text">Covid-19 Updates App for all covid-19 statistics</p>
      </div>

    </div>
  );
};

export default Footer;
