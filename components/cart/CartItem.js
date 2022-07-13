import {
  CartItemContainer,
  ImageBox,
  CartItemName,
  QuantityButton,
  QuantityInput,
  CartItemPrice,
  RowBox,
} from "./style";
import Image from "next/image";

const CartItem = ({ itemData }) => {
  console.log(itemData);
  return (
    <CartItemContainer>
      <ImageBox>
        <Image
          width={164}
          height={103}
          objectFit="contain"
          src={itemData?.product?.images[0]}
          alt=""
        />
      </ImageBox>
      <RowBox jContent="space-between" fill>
        <RowBox gap="118px" mb>
          <CartItemName>{itemData?.product?.name}</CartItemName>
          <RowBox>
            <QuantityButton mb>-</QuantityButton>
            <QuantityInput min={1} value={1} type="number" />
            <QuantityButton>+</QuantityButton>
          </RowBox>
        </RowBox>
        <RowBox mb mbReverse>
          <CartItemPrice>${itemData?.product?.price}</CartItemPrice>
          <Image
            width={14}
            height={11}
            objectFit="contain"
            src="/images/icons/delete.svg"
            alt=""
          />
        </RowBox>
      </RowBox>
    </CartItemContainer>
  );
};

export default CartItem;
