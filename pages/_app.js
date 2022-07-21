import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/layout";
import { wrapper } from "../store/store";
import { SessionProvider } from "next-auth/react";
// Binding events to display spinner when user navigate between routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Website({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default wrapper.withRedux(Website);
