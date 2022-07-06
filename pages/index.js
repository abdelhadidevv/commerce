import LayoutPage from "../components/layout/LayoutPage";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Trending from "../components/home/Trending";
import { useDispatch } from "react-redux";
import {
  getOffers,
  getFeaturedCategories,
  getAllCategory,
  getFeaturedProducts,
  getTrendingProducts,
  reset,
} from "../store/features/products/productsSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
    dispatch(getFeaturedCategories());
    dispatch(getAllCategory());
    dispatch(getFeaturedProducts());
    dispatch(getTrendingProducts());
    dispatch(reset());
  }, []);

  return (
    <LayoutPage mt0>
      <Hero />
      <Categories />
      <Offers />
      <Products />
      <Trending />
    </LayoutPage>
  );
}
