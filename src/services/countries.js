import axios from "axios";

const PAGE_URL = "https://restcountries.com/v2/all/";

export const getCountries = async () => {
  try {
    const response = await axios.get(PAGE_URL);
    return response.data;
  } catch (error) {
    return error;
  }
};
