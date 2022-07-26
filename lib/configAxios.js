import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const instance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
});

export const setAxiosToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
