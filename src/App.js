import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Country from "./routes/country/country.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import { fetchCountriesData } from "./store/countries-actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
    console.log("FETCHING DATA...");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="country/*" element={<Country />} />
        {/* <Route path="country" element={<Country />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
