import {
  StyledFooter,
  StyledColumn,
  StyledRow,
  StyledLogo,
  Divider,
  CopyRights,
  StyledIcon,
  StyledText,
  StyledTitle,
  StyledLink,
  StyledTextSm,
  StyledInfo,
} from "./style";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledColumn gap="26px">
        <StyledRow justify="space-between" rowGap>
          <StyledColumn gap="30px" fill>
            <StyledLogo>
              <Image layout="fill" src="/images/logo.png" alt="logo" />
            </StyledLogo>
            <StyledText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </StyledText>
          </StyledColumn>
          <StyledColumn gap="30px">
            <StyledTitle>Home</StyledTitle>
            <StyledLink>Featured Categories</StyledLink>
            <StyledLink>Featured Products</StyledLink>
            <StyledLink>Offers</StyledLink>
          </StyledColumn>
          <StyledColumn gap="30px">
            <StyledTitle>Menu</StyledTitle>
            <StyledLink>Home</StyledLink>
            <StyledLink>New arrival</StyledLink>
            <StyledLink>Mobiles</StyledLink>
          </StyledColumn>
          <StyledColumn gap="30px" fillLinks>
            <StyledTitle>Menu</StyledTitle>
            <StyledLink>Laptops</StyledLink>
            <StyledLink>Headphones</StyledLink>
            <StyledLink>Accessories</StyledLink>
          </StyledColumn>
          <StyledColumn gap="25px" fill>
            <StyledTitle>Contacts</StyledTitle>
            <StyledTextSm>
              Fell free get in touch with us via phone or send us a message
            </StyledTextSm>
            <StyledRow gap="17px" equal>
              <StyledInfo>
                <StyledIcon sm src="/images/icons/phone.svg" /> +1 234 567 89 10
              </StyledInfo>
              <StyledInfo>
                <StyledIcon sm src="/images/icons/email.svg" />
                support@khoomi.com
              </StyledInfo>
            </StyledRow>
          </StyledColumn>
        </StyledRow>
        <Divider />
        <StyledRow justify="space-between">
          <CopyRights>all copyRights are reserved @2022</CopyRights>
          <StyledRow gap="33px">
            <StyledIcon src="/images/icons/facebook.svg" />
            <StyledIcon src="/images/icons/whatsapp.svg" />
          </StyledRow>
        </StyledRow>
      </StyledColumn>
    </StyledFooter>
  );
};

export default Footer;