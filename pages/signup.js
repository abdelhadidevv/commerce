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
import { SignUpSchema } from "../utils/validationSchema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup, reset } from "../store/features/auth/authSlice";
import { useRouter } from "next/router";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { user, isLogin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "a3@gmail.com",
      password: "A1@gmail.com",
      passwordConfirmation: "A1@gmail.com",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      dispatch(signup(values));
    },
  });

  useEffect(() => {
    if (isError) {
      setErrorMessage(message);
    }

    if (isSuccess) {
      router.push("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, router, dispatch]);

  if (isLogin) {
    router.push("/");
    return null;
  }

  return (
    <LayoutPage mt0 title="SignUp">
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
            <AuthTitle>Get Started</AuthTitle>
            <AuthSubTitle>
              Create a new account and start shopping NOW!
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
              <StyledTitle>SIGN UP</StyledTitle>
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
              <StyledInput
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
                placeholder="Confirm Password"
              />
              {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation ? (
                <SmErrorMessage>
                  {formik.errors.passwordConfirmation}
                </SmErrorMessage>
              ) : null}
              <StyledSend>
                SIGN UP
                <Image
                  width={28}
                  height={28}
                  src="/images/icons/auth-arrow.svg"
                  alt=""
                />
              </StyledSend>
              {errorMessage && <SmErrorMessage>{errorMessage}</SmErrorMessage>}
            </StyledBox>
            <Link href="/login">
              <StyledLink>
                Already member? <span>LogIn</span>
              </StyledLink>
            </Link>
          </RightBox>
        </AuthContainer>
      )}
    </LayoutPage>
  );
};

export default SignUp;
