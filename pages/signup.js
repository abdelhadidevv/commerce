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

const SignUp = () => {
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
          <StyledBox>
            <StyledTitle>SIGN UP</StyledTitle>
            <StyledInput placeholder="John@example.com" />
            <StyledInput placeholder="Password" />
            <StyledInput placeholder="Confirm Password" />
            <StyledSend>
              SIGN UP
              <Image
                width={28}
                height={28}
                src="/images/icons/auth-arrow.svg"
                alt=""
              />
            </StyledSend>
          </StyledBox>
          <Link href="/login">
            <StyledLink>
              Already member? <span>LogIn</span>
            </StyledLink>
          </Link>
        </RightBox>
      </AuthContainer>
    </LayoutPage>
  );
};

export default SignUp;
