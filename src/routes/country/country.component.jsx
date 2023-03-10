import { Routes, Route } from 'react-router-dom';
import CountryInfo from '../../components/country-info/country-info.component';

const Country = () => {
  // const country = useSelector((state) => state.countries.selectedCountry);

  // console.log(country);

  // return <CountryInfo country={country}/>;
  return (
    <Routes>
      <Route path=":country" element={<CountryInfo />} />
    </Routes>
  );
};

export default Country;
