import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/layout";
import { wrapper } from "../store/store";
import { useEffect } from "react";
import { isUserAuthenticated } from "../store/features/auth/authSlice";
import { useDispatch } from "react-redux";
// Binding events to display spinner when user navigate between routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Website({ Component, pageProps, router }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(isUserAuthenticated(user));
    }
  }, []);

  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(Website);
