import {
  ProductItemContainer,
  ProductImageBox,
  ProductName,
  MoreInfo,
} from "./style";
import { ProductPrice } from "../../../shared/Text";
import Image from "next/image";


const ProductItem = () => {
  return (
    <ProductItemContainer>
      <ProductImageBox>
        <Image
          width={150}
          height={150}
          objectFit="contain"
          src="/images/phone3.png"
          alt=""
        />
      </ProductImageBox>
      <ProductName>Smart Watch</ProductName>
      <ProductPrice>$990</ProductPrice>
      <MoreInfo>
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
