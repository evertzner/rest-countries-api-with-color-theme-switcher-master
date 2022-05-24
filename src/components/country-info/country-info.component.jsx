import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { countriesActions } from "../../store/countries-slice";
import "./country-info.styles.scss";

const CountryInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country } = useParams();
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  // useEffect(() => {
  //   dispatch(countriesActions.selectCountry(country));
  // }, []);

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies, //name
    languages, //name
    borders, //select it through alpha3Code
  } = selectedCountry;

  const onGoBackHandler = () => {
    navigate("/");
  };
  //console.log(selectedCountry);
  return (
    <div className="country-info">
      <div className="country-info__go-back" onClick={onGoBackHandler}>
        Back
      </div>
      <div className="country-info__info">
        <img
          src={flag}
          alt={`${name}-flag`}
          className="country-info__info--flag"
        />
        <div className="country-info__info__details">
          <h1 className="country-info__info__details--name">{name}</h1>
          <div className="country-info__info__details--native-name">
            <span>Native Name: </span>
            {nativeName}
          </div>
          <div className="country-info__info__details--population">
            <span>Population: </span>
            {population}
          </div>
          <div className="country-info__info__details--region">
            <span>Region: </span>
            {region}
          </div>
          <div className="country-info__info__details--sub-region">
            <span>Sub Region: </span>
            {subregion}
          </div>
          <div className="country-info__info__details--capital">
            <span>Capital: </span>
            {capital}
          </div>
          <div className="country-info__info__details--top-level-domain">
            <span>Top Level Domain: </span>
            {topLevelDomain}
          </div>
          <div className="country-info__info__details--currencies">
            <span>Currencies: </span>
            {currencies[0].name}
          </div>
          <div className="country-info__info__details--languages">
            <span>Languages: </span>
            {languages[0].name}
          </div>
          <div className="country-info__info__details--border-countries">
            <span>Border Countries: </span>
            {borders[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
