import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Fonts from "../fonts";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isUserAuthenticated } from "../../store/features/auth/authSlice";

const Layout = ({ children }) => {
  const routerHook = useRouter();
  const isShowNavAndFooter =
    routerHook.asPath !== "/signup" && routerHook.asPath !== "/login";
  const { data } = useSession();
  const dispatch = useDispatch();

  const checkIsLogin = async () => {
    dispatch(isUserAuthenticated(data?.user?.token));
  };
  useEffect(() => {
    checkIsLogin();
    // eslint-disable-next-line
  }, [data]);

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
