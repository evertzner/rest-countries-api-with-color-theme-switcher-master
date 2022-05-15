import { useState, useEffect } from "react";
import { getCountries } from "../../services/countries";

import Countries from "../countries/countries.component";
import LoaderSpinner from "../loader-spinner/loader-spinner.component";

import "./countries-container.styles.scss";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getCountriesArray = async () => {
      const countriesArray = await getCountries();
      setLoading(false);
      setCountries(countriesArray);
    };
    getCountriesArray();
  }, []);

  return (
    <div className="countries-container">
      {loading ? <LoaderSpinner /> : <Countries countries={countries} />}
    </div>
  );
};

export default CountriesContainer;
