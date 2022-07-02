import {
  TrendingProductItemCard,
  ImageBox,
  StyledRow,
  ProductName,
} from "./style";
import { ProductPrice } from "../../shared/Text";
import Image from "next/image";

const TrendingProductItem = () => {
  return (
    <TrendingProductItemCard>
      <ImageBox>
        <Image
          width={200}
          height={200}
          objectFit="contain"
          src="/images/phone3.png"
          alt=""
        />
      </ImageBox>
      <StyledRow>
        <ProductName>Nike Court Air </ProductName>
        <ProductPrice mt0>$58</ProductPrice>
      </StyledRow>
    </TrendingProductItemCard>
  );
};

export default TrendingProductItem;
