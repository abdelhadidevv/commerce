import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import Layout from "../components/layout";
import store from "../store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

function Website({ Component, pageProps, router }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default Website;
