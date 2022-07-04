import {
  OrderContainer,
  OrderImageBox,
  OrderItemName,
  OrderItemPrice,
} from "./style";
import Image from "next/image";

const OrderItem = () => {
  return (
    <OrderContainer>
      <OrderImageBox>
        <Image
          width={164}
          height={103}
          objectFit="contain"
          src="/images/bag.png"
          alt=""
        />
      </OrderImageBox>
      <OrderItemName>Laptop Bag</OrderItemName>
      <OrderItemPrice>$75</OrderItemPrice>
    </OrderContainer>
  );
};

export default OrderItem;
