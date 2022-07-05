import LayoutPage from "../components/layout/LayoutPage";
import {
  CheckoutContainer,
  StyledTitle,
  CheckoutButton,
  RightContainer,
  LeftContainer,
  RightBox,
  InputTitle,
  StyledInput,
  StyledRow,
  StyledGrid,
  StyledColumn,
  OrderInfoTitle,
  OrderInfoValue,
} from "../components/checkout/style";
import { BackButton } from "../components/cart/style";
import { Divider2 } from "../components/shared/Divider";
import PaymentType from "../components/shared/PaymentType";
import Image from "next/image";

const Checkout = () => {
  return (
    <LayoutPage title="Checkout">
      <CheckoutContainer>
        <BackButton>
          <Image
            width={27}
            height={14}
            src="/images/icons/back-arrow.svg"
            alt=""
          />
          Return to my cart
        </BackButton>
        <StyledRow gap mb>
          <LeftContainer>
            <StyledTitle mt="60px">Choose your payment method</StyledTitle>
            <PaymentType />
            <InputTitle>Credit card number</InputTitle>
            <StyledInput type="text" placeholder="0000 0000 0000 0000" />
            <StyledGrid>
              <StyledColumn>
                <InputTitle>CVV code</InputTitle>
                <StyledInput type="text" placeholder="cvv" />
              </StyledColumn>
              <StyledColumn>
                <InputTitle>Expiry date</InputTitle>
                <StyledInput type="text" placeholder="MM/YY" />
              </StyledColumn>
            </StyledGrid>
            <InputTitle>Name on card</InputTitle>
            <StyledInput type="text" placeholder="Name" />
          </LeftContainer>
          <RightContainer>
            <RightBox>
              <StyledTitle>Summary</StyledTitle>
              <OrderInfo title="Order total" value="$ 2,378.00" />
              <OrderInfo title="Promo code" value="SALE22" />
              <OrderInfo title="Shipping" value="$219.00" />
            </RightBox>
            <RightBox>
              <StyledRow spaceBetween>
                <OrderInfoTitle color="#646363" fSize="22px">
                  Subtotal
                </OrderInfoTitle>
                <OrderInfoTitle color="#0EA965" fSize="25px">
                  Total: $1234
                </OrderInfoTitle>
              </StyledRow>
            </RightBox>
          </RightContainer>
        </StyledRow>
        <Divider2 />
        <CheckoutButton>Checkout</CheckoutButton>
      </CheckoutContainer>
    </LayoutPage>
  );
};

export default Checkout;

const OrderInfo = ({ title, value }) => {
  return (
    <StyledRow spaceBetween>
      <OrderInfoTitle>{title}</OrderInfoTitle>
      <OrderInfoValue>{value}</OrderInfoValue>
    </StyledRow>
  );
};
