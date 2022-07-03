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
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <LayoutPage mt0 title="SignUp">
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
          <StyledBox>
            <StyledTitle>LOGIN</StyledTitle>
            <StyledInput placeholder="John@example.com" />
            <StyledInput placeholder="Password" />
            <StyledSend>
              LOGIN
              <Image
                width={28}
                height={28}
                src="/images/icons/auth-arrow.svg"
                alt=""
              />
            </StyledSend>
          </StyledBox>
          <Link href="/signup">
            <StyledLink>
              Don{`'`}t have account? <span>Sign up</span>
            </StyledLink>
          </Link>
        </RightBox>
      </AuthContainer>
    </LayoutPage>
  );
};

export default Login;
