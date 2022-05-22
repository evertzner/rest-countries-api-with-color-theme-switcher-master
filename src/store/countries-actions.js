import { countriesActions } from "./countries-slice";
import { uiActions } from "./ui-slice";

import axios from "axios";

const PAGE_URL = {
  ALL: "https://restcountries.com/v2/all/",
  NAME: "https://restcountries.com/v2/name/",
  REGION: "https://restcountries.com/v2/region/",
};

export const fetchCountriesData = () => {
  return async (dispatch) => {
    dispatch(uiActions.load());

    const fetchData = async () => {
      const response = await axios.get(PAGE_URL.ALL);
      if (!response) {
        throw new Error("Could not fetch countries data!");
      }

      const { data } = response;
      return data;
    };

    try {
      const countriesData = await fetchData();
      dispatch(
        countriesActions.setCountriesInitial({
          countries: countriesData,
        })
      );
      dispatch(
        countriesActions.setRegions({
          countries: countriesData,
        })
      );

      dispatch(uiActions.load());
    } catch (error) {
      return error;
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "Fetching cart data failed!",
      //   })
      // );
    }
  };
};
