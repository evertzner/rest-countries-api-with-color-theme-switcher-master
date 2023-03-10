import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { countriesActions } from '../../store/countries-slice';
import './country-info.styles.scss';

const CountryInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country } = useParams();
  const selectedCountry = useSelector((state) => state.countries.selectedCountry);

  useEffect(() => {
    dispatch(countriesActions.selectCountry(country));
    console.log(selectedCountry);
  }, [country]);

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
    borders,
    borderCountries
  } = selectedCountry || {};

  const onGoBackHandler = () => {
    navigate('/');
  };

  const onSelectBorderCountry = (e) => {
    navigate(`/country/${e.target.dataset.name}`);
  };
  //console.log(selectedCountry);
  return (
    <div className="country-info">
      <div className="country-info__go-back" onClick={onGoBackHandler}>
        <span>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </span>
        Back
      </div>
      {selectedCountry ? (
        <div className="country-info__info">
          <img src={flag} alt={`${name}-flag`} className="country-info__info--flag" />
          <div className="country-info__info__details">
            <h1 className="country-info__info__details--name">{name}</h1>
            {nativeName && (
              <div className="country-info__info__details--native-name">
                <span>Native Name: </span>
                {nativeName}
              </div>
            )}
            {population && (
              <div className="country-info__info__details--population">
                <span>Population: </span>
                {population}
              </div>
            )}
            {region && (
              <div className="country-info__info__details--region">
                <span>Region: </span>
                {region}
              </div>
            )}
            {subregion && (
              <div className="country-info__info__details--sub-region">
                <span>Sub Region: </span>
                {subregion}
              </div>
            )}
            {capital && (
              <div className="country-info__info__details--capital">
                <span>Capital: </span>
                {capital}
              </div>
            )}
            {topLevelDomain && (
              <div className="country-info__info__details--top-level-domain">
                <span>Top Level Domain: </span>
                {topLevelDomain}
              </div>
            )}
            {currencies && (
              <div className="country-info__info__details--currencies">
                <span>Currencies: </span>
                {currencies[0].name}
              </div>
            )}
            {languages && (
              <div className="country-info__info__details--languages">
                <span>Languages: </span>
                {languages[0].name}
              </div>
            )}
            {borders && (
              <div className="country-info__info__details--border-countries">
                <span>Border Countries: </span>
                <div className="country-info__info__details--border-countries__container">
                  {borderCountries.map((border) => (
                    <div
                      key={border}
                      className="country-info__info__details--border-countries__container__border-country"
                      onClick={onSelectBorderCountry}
                      data-name={border}
                    >
                      {border}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="country-info__not-found">No country found</div>
      )}
    </div>
  );
};

export default CountryInfo;
