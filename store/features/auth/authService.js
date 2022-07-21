import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const login = async (userData) => {
  const response = await axios.post(API_URL + "users/login", userData);
  return response;
};

const signup = async (userData) => {
  const response = await axios.post(API_URL + "users/signup", userData);
  return response.data;
};

const authService = {
  signup,
  login,
};

export default authService;
