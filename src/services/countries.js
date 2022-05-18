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

export const getRegions = async () => {
  try {
    const response = await axios.get(PAGE_URL);
    const regions = response.data.reduce((acc, cur) => {
      if (acc[cur.region]) {
        acc[cur.region]++;
      } else {
        acc[cur.region] = 1;
      }
      return acc;
    }, {});
    return Object.keys(regions).sort((a, b) => {
      if (a > b) return 1;
      return -1;
    });
  } catch (error) {
    return error;
  }
};
