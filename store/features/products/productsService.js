import axios from "axios";
import stringify from "../../../utils/stringify";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const offers = async () => {
  const response = await axios.get(API_URL + "products/offers");
  return response.data;
};

const featuredCategories = async (category = "MOBILES") => {
  const response = await axios.get(
    API_URL + "products/featured-categories" + `?category=${category}`
  );
  return response.data;
};

const allCategory = async () => {
  const response = await axios.get(API_URL + "products/category/all");
  return response.data;
};

const featuredProducts = async () => {
  const response = await axios.get(API_URL + "products/featured-products");
  return response.data;
};

const trendingProducts = async () => {
  const response = await axios.get(API_URL + "products/trending-products");
  return response.data;
};

const productById = async (productId) => {
  const response = await axios.get(API_URL + `products/${productId}`);
  return response.data;
};

const productsByCategory = async (category) => {
  const response = await axios.get(API_URL + `products/category/${category}`);
  return response.data;
};

const productsService = {
  offers,
  featuredCategories,
  allCategory,
  featuredProducts,
  trendingProducts,
  productsByCategory,
  productById,
};

export default productsService;
