import axios from "axios";

export function authHeader(token) {
  if (token) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
}
