import {
  StyledNavbar,
  StyledBox,
  StyledSelect,
  StyledIcon,
  StyledLink,
  StyledButton,
  StyledBoxMobile,
} from "./style";
import NextLink from "next/link";
import Image from "next/image";

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

const Navbar = ({ path }) => {
  return (
    <StyledNavbar>
      {/* normal view */}
      <StyledBox gap="40px">
        <StyledSelect>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </StyledSelect>
        <StyledIcon src="/images/icons/search.svg" />
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
      <StyledBox>
        <StyledButton>Sign In</StyledButton>
      </StyledBox>
      {/* mobile view */}
      <StyledBoxMobile>
        <StyledIcon src="/images/icons/menu.svg" />
      </StyledBoxMobile>
      <StyledBoxMobile>
        <Image width={188} height={39} src="/images/logo.png" alt="logo" />
      </StyledBoxMobile>
      <StyledBoxMobile>
        <StyledButton>Sign In</StyledButton>
      </StyledBoxMobile>
    </StyledNavbar>
  );
};

export default Navbar;
