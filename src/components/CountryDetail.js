import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import Header2 from './Header2';
import { selectedcountry } from '../redux/country';
import './CountryDetail.css';

const CountryDetail = () => {
  const countries = useSelector((state) => state.countries);
  const { Slug } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(selectedcountry());
    }
  }, []);

  const filter = countries.Countries && countries.Countries.filter((cc) => (
    cc.Slug === Slug));

  const singlecountry = filter[0] && filter[0];

  return (
    <div className="country-container">
      <Header2 />
      {Object.keys(countries).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="country-detail">
          <div className="prod-img">
            <img src={`https://countryflagsapi.com/svg/${singlecountry && singlecountry.CountryCode}`} className="country-detail-img" alt={filter.Country} />
          </div>
          <div className="country-infos">
            <h2 className="country-name">
              &nbsp;&nbsp;
              <span>{singlecountry && singlecountry.Country}</span>
            </h2>
            <p className="date">
              Date:&nbsp;&nbsp;
              <span>{singlecountry && singlecountry.Date}</span>
            </p>
          </div>
          <div className="prod-desc">
            <div className="country-detail-section">
              <p className="country-detail-single">
                New Confirmed Cases:&nbsp;&nbsp;
                <span>{singlecountry && singlecountry.NewConfirmed}</span>
              </p>
              <p className="country-detail-single">
                Total Confirmed Cases:&nbsp;&nbsp;
                <span>{singlecountry && singlecountry.TotalConfirmed}</span>
              </p>
              <p className="country-detail-single">
                New Deaths:&nbsp;&nbsp;
                <span>{singlecountry && singlecountry.NewDeaths}</span>
              </p>
            </div>
            <div className="country-detail-section">
              <p className="country-detail-single">
                Total Deaths:&nbsp;&nbsp;
                <span>{singlecountry && singlecountry.TotalDeaths}</span>
              </p>
              <p className="country-detail-single">
                New Recovered:&nbsp;&nbsp;
                <span>{singlecountry && singlecountry.NewRecovered}</span>
              </p>
              <p className="country-detail-single">
                Total Recovered:&nbsp;&nbsp;
                <span>{singlecountry && singlecountry.TotalRecovered}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />

    </div>
  );
};

export default CountryDetail;
