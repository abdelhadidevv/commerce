import {
  ProductItemContainer,
  ProductImageBox,
  ProductName,
  MoreInfo,
} from "./style";
import { ProductPrice } from "../../../shared/Text";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductItem = ({ productData }) => {
  const router = useRouter();

  return (
    <ProductItemContainer>
      <ProductImageBox>
        <Image
          width={150}
          height={150}
          objectFit="contain"
          src={productData.images}
          blurDataURL={productData.images}
          placeholder="blur"
          alt=""
        />
      </ProductImageBox>
      <ProductName>{productData.name}</ProductName>
      <ProductPrice>${productData.price}</ProductPrice>
      <MoreInfo
        onClick={() => {
          router.push(`/product-details/${productData._id}`);
        }}
      >
        More info &nbsp;
        <Image
          width={28}
          height={16}
          src="/images/icons/more-info.svg"
          alt=""
        />
      </MoreInfo>
    </ProductItemContainer>
  );
};

export default ProductItem;
