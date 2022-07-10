import axios from "axios";

export function authHeader() {
  let token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
}
