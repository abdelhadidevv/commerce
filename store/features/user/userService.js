import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const profile = async () => {
  authHeader();

  const response = await axios.get(API_URL + "users/profile");
  return response.data;
};

const userOrders = async () => {
  authHeader();

  const response = await axios.get(API_URL + "orders/my-orders");
  return response.data;
};

const addToCart = async (productData) => {
  authHeader();

  const response = await axios.put(API_URL + "users/profile/cart", productData);
  return response.data;
};

const deleteFromCart = async (productId) => {
  authHeader();

  const response = await axios.delete(
    API_URL + `users/profile/cart?productId=${productId}`
  );
  return response.data;
};

const authService = {
  profile,
  userOrders,
  addToCart,
  deleteFromCart,
};

export default authService;
