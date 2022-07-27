import { instance } from "../../../lib/configAxios";

const profile = async () => {
  const response = await instance.get("users/profile");
  return response.data;
};

const userOrders = async () => {
  const response = await instance.get("orders/my-orders");
  return response.data;
};

const createOrder = async (dataOrder) => {
  const response = await instance.post("orders", dataOrder);
  return response.data;
};

const addToCart = async (productData) => {
  const response = await instance.put("users/profile/cart", productData);
  return response.data;
};

const deleteFromCart = async (productId) => {
  const response = await instance.delete(
    `users/profile/cart?productId=${productId}`
  );
  return response.data;
};

const authService = {
  profile,
  userOrders,
  createOrder,
  addToCart,
  deleteFromCart,
};

export default authService;
