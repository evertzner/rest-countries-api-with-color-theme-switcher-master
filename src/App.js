import { useEffect } from "react";

import CountriesContainer from "./components/countries-container/countries-container.component";

import "./App.styles.scss";
import { useDispatch } from "react-redux";
import { fetchCountriesData } from "./store/countries-actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="header__title">Where in the world?</div>
        <div className="header__dark-mode">
          <span>
            <ion-icon name="moon-outline"></ion-icon>
          </span>
          Dark Mode
        </div>
      </div>
      <CountriesContainer />
    </div>
  );
};

export default App;
