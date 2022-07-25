import {
  StyledNavbar,
  StyledBox,
  StyledSelect,
  StyledIcon,
  StyledLink,
  StyledButton,
  StyledBoxMobile,
  StyledText,
  StyledCartBox,
} from "./style";
import NextLink from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const Navbar = ({ path }) => {
  const { user, isError, isLogin, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { status } = useSession();

  return (
    <StyledNavbar>
      {/* normal view */}
      <StyledBox gap="40px">
        <StyledSelect>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </StyledSelect>
        <StyledIcon src="/images/icons/search.svg" alt="" />
      </StyledBox>
      <StyledBox gap="40px">
        <LinkItem href="/" path={path}>
          Home
        </LinkItem>
        <LinkItem href="/NewArrival" path={path}>
          New arrival
        </LinkItem>
        <LinkItem href="/Mobiles" path={path}>
          Mobiles
        </LinkItem>
        <Image width={180} height={35} src="/images/logo.png" alt="logo" />
        <LinkItem href="/Laptops" path={path}>
          Laptops
        </LinkItem>
        <LinkItem href="/Headphones" path={path}>
          Headphones
        </LinkItem>
        <LinkItem href="/Accessories" path={path}>
          Accessories
        </LinkItem>
      </StyledBox>
      <StyledBox gap="14px">
        {status !== "authenticated" ? (
          <NextLink href="/login">
            <StyledButton>Sign In</StyledButton>
          </NextLink>
        ) : (
          <>
            <StyledIcon src="/images/icons/haret-outline.svg" alt="" />
            <NextLink href="/profile">
              <StyledIcon src="/images/icons/profile.svg" alt="" />
            </NextLink>
            <StyledText>0.00$</StyledText>
            <NextLink href="/cart">
              <StyledCartBox>
                <StyledIcon src="/images/icons/cart-fill.svg" alt="" />
              </StyledCartBox>
            </NextLink>
          </>
        )}
      </StyledBox>
      {/* mobile view */}
      <StyledBoxMobile>
        <StyledIcon src="/images/icons/menu.svg" alt="" />
      </StyledBoxMobile>
      <StyledBoxMobile>
        <Image width={188} height={39} src="/images/logo.png" alt="logo" />
      </StyledBoxMobile>
      <StyledBoxMobile>
        {status !== "authenticated" ? (
          <NextLink href="/login">
            <StyledButton>Sign In</StyledButton>
          </NextLink>
        ) : (
          <StyledIcon src="/images/icons/haret-outline.svg" alt="" />
        )}
      </StyledBoxMobile>
    </StyledNavbar>
  );
};

export default Navbar;

export const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref scroll={false}>
      <StyledLink active={active} target={target} {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
};
