// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Header from './Header2';
// import { selectedcountry, removeSelectedCountry } from "../redux/country";
// import './CountryDetail.css';

// const CountryDetail = (props) => {
//   const country = props;
//   const { CountryCode, Active, Confirmed, Deaths, Recovered } = country.country;


//   const countrydetail = useSelector((state) => state.countries);
 
//   const { Country } = useParams();
//   const dispatch = useDispatch();
//   console.log(countrydetail.Countries);

//   const selectCountry = () => {
//     dispatch(selectedcountry(countrydetail));
//   };


//   useEffect(() => {
//     if(Country && Country !== "") selectCountry();
//     return () => {
//       dispatch(removeSelectedCountry());
//     }
//   }, [selectCountry]);
//   return (
//     <div className="country-detail-page">
//       <Header />
//       <div className="country-container">
//       {Object.keys(country).length === 0 ? (
//         <h2>Loading...</h2>
//       ) : (
//         <div className="country-detail">
//           <div className="country-img">
//           <img src={`https://countryflagsapi.com/svg/${CountryCode}`} alt={Country}></img>
//           </div>
//           <div className="country-name">
//             <h2>{Country}</h2>
//             <p className="todays-cases"></p>
//           </div>
//           <div className="covid-info">
//             <div className="covid-info-1">
//               <p className="active-cases">{Active}</p>
//               <p className="confirmed-cases">{Confirmed}</p>
//             </div>
//             <div className="covid-info-2">
//               <p className="death-cases">{Deaths}</p>
//               <p className="recovered-cases">{Recovered}</p>
//             </div>
//           </div>
//         </div>
      
//       )}
//         </div>
//         </div>

      
//   )
// }

// export default CountryDetail;


import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from './Footer';
import Header2 from "./Header2";
import { selectedcountry, removeSelectedCountry } from "../redux/country";
import './CountryDetail.css';

const CountryDetail = () => {
  const countries = useSelector((state) => state.countries);
  const { Country, NewConfirmed, CountryCode, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date } = countries;
  const { Slug } = useParams();

  
  
  const dispatch = useDispatch();
  
    useEffect(() => {
      if (countries.length === 0) {
        dispatch(selectedcountry());
      }
    }, []);

  

    const filter = countries.Countries && countries.Countries.filter(function(cc) {
      return (
      cc.Slug === Slug)
    })

    console.log(filter[0]);
    const singlecountry = filter[0] && filter[0];

    console.log(countries.Countries);
    



//   const dispatch = useDispatch();
//   console.log(Slug)
//   // const filter = all.filter(function(cc) {
//   //   return (
//   //   cc.Slug = Slug )
//   // })

//   // console.log(filter);

  
//     useEffect(() => {
//       if (countries.length === 0) {
//         dispatch(selectedcountry());
//       }
//     }, []);

//   const countrydata = countries.Countries;
//   console.log(countrydata);


// const results =  useEffect(() => {
//     if(Slug && Slug !== "") selectedcountry();
//     return () => {
//       dispatch(removeSelectedCountry());
//     }
//   }, [Slug]);


  // const filteredResult = country.Counntries.Slug;
  // console.log(filteredResult);

  return (
    <div className="product-container">
      <Header2 />
      {Object.keys(countries).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="product-detail">
          <div className="prod-img">
          <img src={`https://countryflagsapi.com/svg/${singlecountry && singlecountry.CountryCode}`} className="product-img" alt={filter.Country}></img>
          </div>
          <div className="country-infos">
            <h2 className="country-name"><span>{singlecountry && singlecountry.Country}</span></h2>
            <p className="date">Date: <span>{singlecountry && singlecountry.Date}</span></p>
          </div>
          <div className="prod-desc">
          <div className="product-detail-section">
          <p className="product-detail-single">New Confirmed Cases: <span>{singlecountry && singlecountry.NewConfirmed}</span></p>
          <p className="product-detail-single">Total Confirmed Cases: <span>{singlecountry && singlecountry.TotalConfirmed}</span></p>
          <p className="product-detail-single">New Deaths: <span>{singlecountry && singlecountry.NewDeaths}</span></p>
        </div>
        <div className="product-detail-section">
          <p className="product-detail-single">Total Deaths: <span>{singlecountry && singlecountry.TotalDeaths}</span></p>
          <p className="product-detail-single">New Recovered: <span>{singlecountry && singlecountry.NewRecovered}</span></p>
          <p className="product-detail-single">Total Recovered: <span>{singlecountry && singlecountry.TotalRecovered}</span></p>
        </div>
          </div>
        </div>
      )}
      <Footer />

      
    </div>
  )
}

export default CountryDetail;


