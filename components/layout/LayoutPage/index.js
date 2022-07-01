import Head from "next/head";

import { StyledLayoutPage } from "./style";

const LayoutPage = ({ children, title }) => {
  const t = `${title} - TechStore`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta property="og:title" content={t} />
        </Head>
      )}
      <StyledLayoutPage>{children}</StyledLayoutPage>
    </>
  );
};

export default LayoutPage;
