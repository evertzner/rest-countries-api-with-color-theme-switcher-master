import { useState } from "react";
import { getCountry } from "../../services/countries";

import CountryCard from "../country-card/country-card.component";

import "./countries.styles.scss";

const Countries = ({ countries, customClass }) => {
  const [country, setCountry] = useState([]);

  const onSelectCountry = (name) => {
    const getCountryArray = async () => {
      const countryArray = await getCountry(name);
      setCountry(countryArray);
      console.log(countryArray);
    };
    getCountryArray();
  };

  return (
    <div className={`countries ${customClass}`}>
      {countries.length > 0 ? (
        countries.map((c) => (
          <CountryCard
            country={c}
            key={c.numericCode}
            onClick={onSelectCountry}
          />
        ))
      ) : (
        <div className="countries__not-found">No countries found</div>
      )}
    </div>
  );
};

export default Countries;
