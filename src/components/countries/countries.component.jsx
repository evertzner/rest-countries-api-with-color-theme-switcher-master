import CountryCard from "../country-card/country-card.component";

import "./countries.styles.scss";

const Countries = ({ countries, customClass }) => {
  return (
    <div className={`countries ${customClass}`}>
      {countries.map((country) => (
        <CountryCard country={country} key={country.numericCode} />
      ))}
    </div>
  );
};

export default Countries;
