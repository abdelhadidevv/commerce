import LayoutPage from "../components/layout/LayoutPage";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Trending from "../components/home/Trending";
import { useDispatch } from "react-redux";
import store from "../store";
import {
  getOffers,
  getFeaturedCategories,
  getAllCategory,
  getFeaturedProducts,
  getTrendingProducts,
  reset,
  rehydrate,
} from "../store/features/products/productsSlice";
import { useEffect } from "react";

export default function Home({ initialState }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rehydrate(initialState.products));
  }, [dispatch, initialState]);

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

export async function getServerSideProps() {
  await store.dispatch(getOffers());
  await store.dispatch(getFeaturedCategories());
  await store.dispatch(getAllCategory());
  await store.dispatch(getFeaturedProducts());
  await store.dispatch(getTrendingProducts());

  return {
    props: {
      initialState: store.getState(),
    },
  };
}
