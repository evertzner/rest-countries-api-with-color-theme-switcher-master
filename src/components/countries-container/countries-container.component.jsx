import { useState, useEffect } from "react";
import {
  getCountries,
  getRegions,
  getCountry,
  getRegion,
} from "../../services/countries";

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

  const onSearchChanged = (name) => {
    const getCountryArray = async () => {
      const countriesArray = await getCountry(name);
      setCountries(countriesArray);
    };
    getCountryArray();
  };

  const onDropDownChanged = (region) => {
    const getRegionArray = async () => {
      const countriesArray = await getRegion(region);
      setCountries(countriesArray);
    };
    getRegionArray();
  };
  console.log(countries);

  return (
    <div className="countries-container">
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="countries-container__countries">
          <SearchInput
            customClass="countries-container__countries--search-input"
            filter="country"
            onChanged={onSearchChanged}
          />
          <DropdownFilter
            customClass="countries-container__countries--dropdown-filter"
            filter="region"
            items={regions}
            onChanged={onDropDownChanged}
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
