import CountryCard from "../country-card/country-card.component";

import "./countries.styles.scss";

const Countries = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <CountryCard country={country} key={country.numericCode} />
      ))}
    </div>
  );
};

export default Countries;
