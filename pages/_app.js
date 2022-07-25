import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/layout";
import { wrapper } from "../store/store";
import { isUserAuthenticated } from "../store/features/auth/authSlice";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
// Binding events to display spinner when user navigate between routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Website({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider
      session={pageProps.session}
    >
      {Component.auth ? (
        <GlobalValidation router={router}>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </GlobalValidation>
      ) : (
        <GlobalValidation router={router}>
          <Component {...pageProps} />
        </GlobalValidation>
      )}
    </SessionProvider>
  );
}
export default wrapper.withRedux(Website);

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { data, status } = useSession({ required: true });

  return children;
}

function GlobalValidation({ children, router }) {
  const { data, status } = useSession();
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined" || status === "loading") return null;
  else return <Layout router={router}>{children}</Layout>;
}
