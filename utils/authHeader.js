import axios from "axios";

export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${user?.token}`,
    };
  }
}
