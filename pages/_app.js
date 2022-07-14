import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/layout";
import { wrapper } from "../store/store.js";
import { useEffect, useState } from "react";

// Binding events to display spinner when user navigate between routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Website({ Component, pageProps, router }) {
  // const [showing, setShowing] = useState(false);

  // useEffect(() => {
  //   setShowing(true);
  // }, []);

  // if (!showing) {
  //   return null;
  // }

  // if (typeof window === "undefined") {
  //   return <></>;
  // } else {
    return (
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    );
  // }
}

export default wrapper.withRedux(Website);
