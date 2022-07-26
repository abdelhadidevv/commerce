import { instance } from "../../../lib/configAxios";

const login = async (userData) => {
  const response = await instance.post("users/login", userData);
  return response;
};

const signup = async (userData) => {
  const response = await instance.post("users/signup", userData);
  return response.data;
};

const authService = {
  signup,
  login,
};

export default authService;
