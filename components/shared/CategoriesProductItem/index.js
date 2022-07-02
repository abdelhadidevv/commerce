import Image from "next/image";
import {
  CategoriesProductCard,
  StyledIconBox,
  StyledProductName,
  StyledRow,
  StyledImageBox,
} from "./style";
import { Price } from "../../shared/Text";
import { Divider2 } from "../../shared/Divider";
import Star from "../../shared/Star";

const CategoriesProductItem = () => {
  return (
    <CategoriesProductCard>
      <StyledIconBox w="30px" h="25px" aSelf="flex-end">
        <Image width={30} height={25} src="/images/icons/heart.svg" alt="" />
      </StyledIconBox>
      <StyledImageBox>
        <Image
          width={300}
          height={270}
          objectFit="contain"
          src="/images/phone2.png"
          alt=""
          loading="lazy"
        />
      </StyledImageBox>
      <StyledRow m="0px 0px 13px 0px">
        <StyledProductName>Dell Laptop</StyledProductName>
        <Price p="6px 18px">$99</Price>
      </StyledRow>
      <Divider2 />
      <StyledRow m="13px 0px 0px 0px">
        <Star rating={4.0} />
        <Image width={30} height={30} src="/images/icons/add-cart.svg" alt="" />
      </StyledRow>
    </CategoriesProductCard>
  );
};

export default CategoriesProductItem;
