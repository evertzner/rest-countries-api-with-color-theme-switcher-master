import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../../store/countries-slice";

import CountryCard from "../country-card/country-card.component";
import Country from "../country/country.component";

import "./countries.styles.scss";

const Countries = ({ countries, customClass }) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries.selectedCountry);

  const onSelectCountry = (name) => {
    dispatch(countriesActions.selectCountry(name));
  };

  return (
    <div className={`countries ${customClass}`}>
      {country ? (
        <Country country={country} />
      ) : countries.length > 0 ? (
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
