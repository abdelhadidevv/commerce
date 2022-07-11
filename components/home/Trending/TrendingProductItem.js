import {
  TrendingProductItemCard,
  ImageBox,
  StyledRow,
  ProductName,
} from "./style";
import { ProductPrice } from "../../shared/Text";
import Image from "next/image";
import { useRouter } from "next/router";

const TrendingProductItem = ({ productData }) => {
  const router = useRouter();

  return (
    <TrendingProductItemCard
      onClick={() => {
        router.push(`/product-details/${productData._id}`);
      }}
    >
      <ImageBox>
        <Image
          width={200}
          height={200}
          objectFit="contain"
          src={productData.images}
          loading="lazy"
          blurDataURL={productData.images}
          placeholder="blur"
          alt=""
        />
      </ImageBox>
      <StyledRow>
        <ProductName>{productData.name}</ProductName>
        <ProductPrice mt0>${productData.price}</ProductPrice>
      </StyledRow>
    </TrendingProductItemCard>
  );
};

export default TrendingProductItem;
