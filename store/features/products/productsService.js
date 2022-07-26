import { instance } from "../../../lib/configAxios";

const offers = async () => {
  const response = await instance.get("products/offers");
  return response.data;
};

const featuredCategories = async (category = "MOBILES") => {
  const response = await instance.get(
    "products/featured-categories" + `?category=${category}`
  );
  return response.data;
};

const allCategory = async () => {
  const response = await instance.get("products/category/all");
  return response.data;
};

const featuredProducts = async () => {
  const response = await instance.get("products/featured-products");
  return response.data;
};

const trendingProducts = async () => {
  const response = await instance.get("products/trending-products");
  return response.data;
};

const productById = async (productId) => {
  const response = await instance.get(`products/${productId}`);
  return response.data;
};

const productsByCategory = async (category) => {
  const response = await instance.get(`products/category/${category}`);
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
