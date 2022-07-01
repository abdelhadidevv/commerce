import Head from "next/head";
import LayoutPage from "../components/layout/LayoutPage";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <LayoutPage>
      <Hero />
    </LayoutPage>
  );
}
