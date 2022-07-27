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
import { useSelector } from "react-redux";
import {
  getProfile,
  createOrder,
  reset,
} from "../store/features/user/userSlice";
import { wrapper } from "../store/store";
import { getSession } from "next-auth/react";
import { setAxiosToken } from "../lib/configAxios";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51LEyhkFXidM3zNk5QBClUHhH2akvsSNCt5HwaTjHfolKzqRgrF5GR4Oqmgqfz8PQPe1vAyIf1c3tkr0JsqDoErcM00NomsxiMS"
  );
  const { profile, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    console.log("stripe:", stripe, " elements:", elements);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log(paymentMethod);
      // const orderData = {
      //   line_items: checkoutToken.live.line_items,
      //   customer: {
      //     firstname: shippingData.firstName,
      //     lastname: shippingData.lastName,
      //     email: shippingData.email,
      //   },
      //   shipping: {
      //     name: "International",
      //     street: shippingData.address1,
      //     town_city: shippingData.city,
      //     county_state: shippingData.shippingSubdivision,
      //     postal_zip_code: shippingData.zip,
      //     country: shippingData.shippingCountry,
      //   },
      //   fulfillment: { shipping_method: shippingData.shippingOption },
      //   payment: {
      //     gateway: "stripe",
      //     stripe: {
      //       payment_method_id: paymentMethod.id,
      //     },
      //   },
      // };
    }
  };
  return (
    <LayoutPage title="Checkout" protected>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <CheckoutContainer
              onSubmit={(e) => handleSubmit(e, elements, stripe)}
            >
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
                  <StyledTitle mt="60px">
                    Choose your payment method
                  </StyledTitle>
                  <PaymentType />
                  <CardElement />
                  {/* <InputTitle>Credit card number</InputTitle>
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
                  <StyledInput type="text" placeholder="Name" /> */}
                </LeftContainer>
                
                <RightContainer>
                  <RightBox>
                    <StyledTitle>Summary</StyledTitle>
                    <OrderInfo
                      title="Order total"
                      value={`$ ${profile.cart.totalPrice}`}
                    />
                    <OrderInfo title="Promo code" value="SALE22" />
                    <OrderInfo title="Shipping" value="$219.00" />
                  </RightBox>
                  <RightBox>
                    <StyledRow spaceBetween>
                      <OrderInfoTitle color="#646363" fSize="22px">
                        Subtotal
                      </OrderInfoTitle>
                      <OrderInfoTitle color="#0EA965" fSize="25px">
                        Total: $ {profile.cart.totalPrice}
                      </OrderInfoTitle>
                    </StyledRow>
                  </RightBox>
                </RightContainer>
              </StyledRow>
              <Divider2 />
              <CheckoutButton type="submit">
                {/* disabled={!stripe} */}
                Checkout
              </CheckoutButton>
            </CheckoutContainer>
          )}
        </ElementsConsumer>
      </Elements>
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const session = await getSession({ req: ctx.req });
    setAxiosToken(session?.user?.token);
    await store.dispatch(getProfile());
  }
);

Checkout.auth = true;
