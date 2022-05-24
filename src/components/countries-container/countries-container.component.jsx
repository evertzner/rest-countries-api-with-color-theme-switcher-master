import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../../store/countries-slice";

import Countries from "../countries/countries.component";
import LoaderSpinner from "../loader-spinner/loader-spinner.component";
import DropdownFilter from "../dropdown-filter/dropdown-filter.component";
import SearchInput from "../search-input/search-input.component";

import "./countries-container.styles.scss";
import { fetchCountriesData } from "../../store/countries-actions";

const CountriesContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const regions = useSelector((state) => state.countries.regions);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  const onSearchChanged = (name) => {
    dispatch(countriesActions.setSearchText(name));
    dispatch(countriesActions.getCountry());
  };

  const onDropDownChanged = (region) => {
    dispatch(countriesActions.setDropdownSelected(region));
    dispatch(countriesActions.getCountry());
  };

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
