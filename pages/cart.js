import LayoutPage from "../components/layout/LayoutPage";
import {
  CartContainer,
  BackButton,
  CartList,
  PaymentButton,
} from "../components/cart/style";
import CartItem from "../components/cart/CartItem";
import Image from "next/image";

const Cart = () => {
  return (
    <LayoutPage title="Cart">
      <CartContainer>
        <BackButton>
          <Image
            width={27}
            height={14}
            src="/images/icons/back-arrow.svg"
            alt=""
          />
          Return to the product details
        </BackButton>
        <CartList>
         <CartItem />
         <CartItem />
         <CartItem />
        </CartList>
        <PaymentButton>Go To Payment</PaymentButton>
      </CartContainer>
    </LayoutPage>
  );
};

export default Cart;
