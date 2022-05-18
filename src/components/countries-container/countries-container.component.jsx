import { useState, useEffect } from "react";
import { getCountries, getRegions } from "../../services/countries";

import Countries from "../countries/countries.component";
import LoaderSpinner from "../loader-spinner/loader-spinner.component";
import DropdownFilter from "../dropdown-filter/dropdown-filter.component";
import SearchInput from "../search-input/search-input.component";

import "./countries-container.styles.scss";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getCountriesArray = async () => {
      const countriesArray = await getCountries();
      const regionsArray = await getRegions();
      setLoading(false);
      setCountries(countriesArray);
      setRegions(regionsArray);
    };
    getCountriesArray();
  }, []);

  return (
    <div className="countries-container">
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="countries-container__countries">
          <SearchInput
            customClass="countries-container__countries--search-input"
            filter="country"
          />
          <DropdownFilter
            customClass="countries-container__countries--dropdown-filter"
            filter="region"
            items={regions}
          />
          <Countries
            customClass="countries-container__countries--countries"
            countries={countries}
          />
        </div>
      )}
    </div>
  );
};

export default CountriesContainer;
