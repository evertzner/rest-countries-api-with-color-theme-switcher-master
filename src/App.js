import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { uiActions } from "./store/ui-slice";

import Country from "./routes/country/country.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import { fetchCountriesData } from "./store/countries-actions";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  useEffect(() => {
    dispatch(fetchCountriesData());
    console.log("FETCHING DATA...");
    //document.body.setAttribute("data-theme", theme);
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
