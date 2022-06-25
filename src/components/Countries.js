import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countryz from './Country';
import Header from './Header';
import { getCountries } from '../redux/country';
import Footer from './Footer';
import './Countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, []);

  const allcountries = countries.Countries;

  const global = countries.Global;

  // console.log(global);

  return (
    <div className="countries-container">
      <Header />
      <div className="countries-home">
        <h2 className="welcome">
          Welcome To
          <span>Covid-19 Updates</span>
        </h2>
        <p>Get real time data on covid-19 statistics around the world</p>
      </div>
      <div className="global-data">
        <h2 className="global-head">Global Data</h2>

        <div className="global-info">
          <div className="global-section">
            <p className="global-single">
              New Confirmed Cases:&nbsp;&nbsp;
              <span>{global && global.NewConfirmed}</span>
            </p>
            <p className="global-single">
              Total Confirmed Cases:&nbsp;&nbsp;
              <span>{global && global.TotalConfirmed}</span>
            </p>
            <p className="global-single">
              New Deaths:&nbsp;&nbsp;
              <span>{global && global.NewDeaths}</span>
            </p>
          </div>
          <div className="global-section">
            <p className="global-single">
              Total Deaths:&nbsp;&nbsp;
              <span>{global && global.TotalDeaths}</span>
            </p>
            <p className="global-single">
              New Recovered:&nbsp;&nbsp;
              <span>{global && global.NewRecovered}</span>
            </p>
            <p className="global-single">
              Total Recovered:&nbsp;&nbsp;
              <span>{global && global.TotalRecovered}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="country-list-head">Data Per Country</h2>
      </div>
      <div className="country-list">

        { allcountries && allcountries.map((country) => (
          <Countryz country={country} key={country.CountryCode} />
        )) }
      </div>
      <Footer />
    </div>
  );
};

export default Countries;
