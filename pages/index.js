import Head from "next/head";
import LayoutPage from "../components/layout/LayoutPage";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Trending from "../components/home/Trending";

export default function Home() {
  return (
    <LayoutPage>
      <Hero />
      <Categories />
      <Offers />
      <Products />
      <Trending />
    </LayoutPage>
  );
}
