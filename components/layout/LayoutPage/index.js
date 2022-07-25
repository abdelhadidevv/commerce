import Head from "next/head";
import { StyledLayoutPage } from "./style";

const LayoutPage = ({ children, title, mt0 }) => {
  const pageTitle = `${title} - TechStore`;

  return (
    <>
      {title && (
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} />
        </Head>
      )}
      <StyledLayoutPage mt0={mt0}>{children}</StyledLayoutPage>
    </>
  );
};

export default LayoutPage;
