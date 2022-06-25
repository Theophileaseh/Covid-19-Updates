import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Country.css';

const Countryz = (props) => {
  const country = props;
  const {
    Country, NewConfirmed, CountryCode, Slug,
  } = country.country;

  return (
    <div className="single-country" key={CountryCode}>
      <Link className="link" to={`/${Slug}`}>
        <div className="country-img">
          <img src={`https://countryflagsapi.com/svg/${CountryCode}`} className="country-img" alt={Country} />
        </div>
        <div className="country-info">
          <h3 className="country-name">{Country}</h3>
          <p className="covid-icon">
            New Confirmed Cases:
            <span>{ NewConfirmed }</span>
          </p>
        </div>
      </Link>
    </div>

  );
};

Countryz.protoTypes = {
  country: PropTypes.object.isRequired,
};

export default Countryz;
