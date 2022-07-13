import Head from "next/head";
import { StyledLayoutPage } from "./style";
import { isUserAuthenticated } from "../../../store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LayoutPage = ({ children, title, mt0, protectedPage }) => {
  const t = `${title} - TechStore`;
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isUserAuthenticated());
  }, [title, dispatch]);

  useEffect(() => {
    if (isLogin) {
      if (title === "Login" || title === "SignUp") {
        router.push("/");
      }
    }
  }, [isLogin, title, router]);

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
