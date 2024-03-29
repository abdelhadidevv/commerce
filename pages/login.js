import LayoutPage from "../components/layout/LayoutPage";
import {
  AuthContainer,
  LeftBox,
  RightBox,
  AuthTitle,
  AuthSubTitle,
  AuthImageBox,
  StyledTitle,
  StyledInput,
  StyledBox,
  StyledSend,
  StyledLink,
} from "../components/shared/AuthUI";
import { SmErrorMessage } from "../components/shared/ErrorMessage";
import Spinner from "../components/shared/Spinner";
import Image from "next/image";
import Link from "next/link";
import { LoginSchema } from "../utils/validationSchema";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { user, isLogin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { status } = useSession();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "omaralhafni@gmail.com",
      password: "omarAlhafni@123456",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: `${window.location.origin}/`,
      });
      if (!result.error && result.ok) {

      } else {
        setErrorMessage(result.error);
      }
    },
  });

  if (status === "authenticated") {
    router.replace("/");
    return null;
  }

  return (
    <LayoutPage mt0 title="Login">
      {isLoading ? (
        <Spinner fill />
      ) : (
        <AuthContainer>
          <LeftBox>
            <Image
              width={361}
              height={75}
              objectFit="contain"
              src="/images/logo2.png"
              alt=""
            />
            <AuthTitle>Welcome Back!</AuthTitle>
            <AuthSubTitle>
              Login to your account and start your shopping NOW!
            </AuthSubTitle>
            <AuthImageBox>
              <Image
                width={550}
                height={550}
                objectFit="contain"
                src="/images/login_image.png"
                alt=""
              />
            </AuthImageBox>
          </LeftBox>
          <RightBox>
            <StyledBox onSubmit={formik.handleSubmit}>
              <StyledTitle>LOGIN</StyledTitle>
              <StyledInput
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="John@example.com"
              />
              {formik.touched.email && formik.errors.email ? (
                <SmErrorMessage>{formik.errors.email}</SmErrorMessage>
              ) : null}
              <StyledInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <SmErrorMessage>{formik.errors.password}</SmErrorMessage>
              ) : null}
              <StyledSend>
                LOGIN
                <Image
                  width={28}
                  height={28}
                  src="/images/icons/auth-arrow.svg"
                  alt=""
                />
              </StyledSend>
              {errorMessage && <SmErrorMessage>{errorMessage}</SmErrorMessage>}
            </StyledBox>
            <Link href="/signup">
              <StyledLink>
                Don{`'`}t have account? <span>Sign up</span>
              </StyledLink>
            </Link>
          </RightBox>
        </AuthContainer>
      )}
    </LayoutPage>
  );
};

export default Login;
