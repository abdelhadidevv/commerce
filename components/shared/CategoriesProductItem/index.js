import Image from "next/image";
import { useRouter } from "next/router";
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

const CategoriesProductItem = ({ productData }) => {
  const router = useRouter();

  return (
    <CategoriesProductCard
      onClick={() => {
        router.push(`/product-details/${productData._id}`);
      }}
    >
      <StyledIconBox w="30px" h="25px" aSelf="flex-end">
        <Image width={30} height={25} src="/images/icons/heart.svg" alt="" />
      </StyledIconBox>
      <StyledImageBox>
        <Image
          width={300}
          height={270}
          objectFit="contain"
          src={productData?.images}
          alt=""
          loading="lazy"
        />
      </StyledImageBox>
      <StyledRow m="0px 0px 13px 0px">
        <StyledProductName>{productData?.name}</StyledProductName>
        <Price p="6px 18px">${productData?.price}</Price>
      </StyledRow>
      <Divider2 />
      <StyledRow m="13px 0px 0px 0px">
        <Star rating={productData?.rating} />
        <Image width={30} height={30} src="/images/icons/add-cart.svg" alt="" />
      </StyledRow>
    </CategoriesProductCard>
  );
};

export default CategoriesProductItem;
