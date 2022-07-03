import Head from "next/head";
import { StyledLayoutPage } from "./style";

const LayoutPage = ({ children, title, mt0 }) => {
  const t = `${title} - TechStore`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta property="og:title" content={t} />
        </Head>
      )}
      <StyledLayoutPage mt0={mt0}>{children}</StyledLayoutPage>
    </>
  );
};

export default LayoutPage;
