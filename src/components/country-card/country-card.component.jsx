import "./country-card.styles.scss";

const CountryCard = ({ country }) => {
  const { flag, name, population, region, capital } = country;

  return (
    <div className="country-card">
      <img src={flag} alt={`${name}-flag`} className="country-card__flag" />
      <div className="country-card__info">
        <h3 className="country-card__info--name">{name}</h3>
        <div className="country-card__info--population">
          <span>Population: </span>
          {population}
        </div>
        <div className="country-card__info--region">
          <span>Region: </span>
          {region}
        </div>
        <div className="country-card__info--capital">
          <span>Capital: </span>
          {capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
