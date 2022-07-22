import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Fonts from "../fonts";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const routerHook = useRouter();
  const isShowNavAndFooter =
    routerHook.asPath !== "/signup" && routerHook.asPath !== "/login";
  const { status } = useSession();
  const loading = status === "loading";

  if (loading) return null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TechStore home" />
        <meta name="author" content="TechStore" />
        <meta name="author" content="TechStore" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="TechStore" />
        <meta name="og:title" content="TechStore" />
        <meta property="og:type" content="website" />
        <title>TechStore - Home</title>
      </Head>
      <Fonts />

      {isShowNavAndFooter && <Navbar path={routerHook.asPath} />}
      {children}
      {isShowNavAndFooter && <Footer />}
    </>
  );
};

export default Layout;
