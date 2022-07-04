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

const CartItem = () => {
  return (
    <CartItemContainer>
      <ImageBox>
        <Image
          width={164}
          height={103}
          objectFit="contain"
          src="/images/bag.png"
          alt=""
        />
      </ImageBox>
      <RowBox jContent="space-between" fill>
        <RowBox gap="118px" mb>
          <CartItemName>Laptop Bag</CartItemName>
          <RowBox>
            <QuantityButton mb>-</QuantityButton>
            <QuantityInput min={1} value={1} type="number" />
            <QuantityButton>+</QuantityButton>
          </RowBox>
        </RowBox>
        <RowBox mb mbReverse>
          <CartItemPrice>$75</CartItemPrice>
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
