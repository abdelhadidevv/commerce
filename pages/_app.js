import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import Layout from "../components/layout";
import store from "../store";
import { Provider } from "react-redux";

function Website({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default Website;
