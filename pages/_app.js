import "../styles/globals.css";
import "../styles/dotsSingleSlider.css";
import "../styles/dots.css";
import Layout from "../components/layout";

function Website({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Website;
