import LayoutPage from "../components/layout/LayoutPage";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Trending from "../components/home/Trending";
import { wrapper } from "../store/store";
import {
  getOffers,
  getFeaturedCategories,
  getAllCategory,
  getFeaturedProducts,
  getTrendingProducts,
} from "../store/features/products/productsSlice";
import { getSession } from "next-auth/react";

export default function Home() {
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const session = await getSession({ req: ctx.req });
    console.log("sessionState", session);
    await store.dispatch(getOffers());
    await store.dispatch(getFeaturedCategories());
    await store.dispatch(getAllCategory());
    await store.dispatch(getFeaturedProducts());
    await store.dispatch(getTrendingProducts());
  }
);
