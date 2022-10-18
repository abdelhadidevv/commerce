import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/layout";
import { wrapper } from "../store/store";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

// Binding events to display spinner when user navigate between routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Website({ Component, pageProps: { session, ...pageProps }, router }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Provider store={store}>
          <GlobalValidation router={router}>
            <Auth>
              <Component {...props.pageProps} />
            </Auth>
          </GlobalValidation>
        </Provider>
      ) : (
        <Provider store={store}>
          <GlobalValidation router={router}>
            <Component {...props.pageProps} />
          </GlobalValidation>
        </Provider>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </SessionProvider>
  );
}
export default Website;

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
