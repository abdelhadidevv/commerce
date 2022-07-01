import "../styles/globals.css";
import Layout from "../components/layout";

function Website({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Website;
