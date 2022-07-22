import Head from "next/head";
import { StyledLayoutPage } from "./style";
import { isUserAuthenticated } from "../../../store/features/auth/authSlice";
import { authHeader } from "../../../utils/authHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const LayoutPage = ({ children, title, mt0 }) => {
  const t = `${title} - TechStore`;
  const dispatch = useDispatch();
  const { data } = useSession();

  useEffect(() => {
    authHeader(data?.user?.token);
    dispatch(isUserAuthenticated(data?.user?.token));
  }, [data, title, dispatch]);


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
