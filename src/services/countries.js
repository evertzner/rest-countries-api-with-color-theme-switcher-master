import axios from "axios";

const PAGE_URL = {
  ALL: "https://restcountries.com/v2/all/",
  NAME: "https://restcountries.com/v2/name/",
  REGION: "https://restcountries.com/v2/region/",
};

let cancelToken;

export const getCountries = async () => {
  try {
    if (cancelToken) {
      cancelToken.cancel("Operation cancelled");
    }
    cancelToken = axios.CancelToken.source();
    const response = await axios.get(PAGE_URL.ALL, {
      cancelToken: cancelToken.token,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRegions = async () => {
  try {
    if (cancelToken) {
      cancelToken.cancel("Operation cancelled");
    }
    cancelToken = axios.CancelToken.source();
    const response = await axios.get(PAGE_URL.ALL, {
      cancelToken: cancelToken.token,
    });
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

export const getCountry = async (name) => {
  try {
    if (cancelToken) {
      cancelToken.cancel("Operation cancelled");
    }
    cancelToken = axios.CancelToken.source();
    const response = await axios.get(
      name ? `${PAGE_URL.NAME}${name}` : PAGE_URL.ALL,
      {
        cancelToken: cancelToken.token,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response.statusText === "Not Found") {
      return [];
    }
    return error;
  }
};

export const getRegion = async (region) => {
  try {
    if (cancelToken) {
      cancelToken.cancel("Operation cancelled");
    }
    cancelToken = axios.CancelToken.source();
    const response = await axios.get(
      region && region !== "All" ? `${PAGE_URL.REGION}${region}` : PAGE_URL.ALL,
      {
        cancelToken: cancelToken.token,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response.statusText === "Not Found") {
      return [];
    }
    return error;
  }
};
