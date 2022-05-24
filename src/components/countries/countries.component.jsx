import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { countriesActions } from "../../store/countries-slice";

import CountryCard from "../country-card/country-card.component";

import "./countries.styles.scss";

const Countries = ({ countries, customClass }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSelectCountry = (name) => {
    dispatch(countriesActions.selectCountry(name));
    navigate(`country/${name}`);
  };

  return (
    <div className={`countries ${customClass}`}>
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard
            country={country}
            key={country.numericCode}
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
