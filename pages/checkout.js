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
import {useRouter} from "next/router";
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
import axios from "axios";
import toast from "react-hot-toast";

const Checkout = ({ publicKey }) => {
  const { profile, createdOrder, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.user);
  const stripePromise = loadStripe(publicKey);
  const router = useRouter();

  const options = {
    // passing the client secret obtained from the server
    clientSecret: createdOrder?.clientSecret,
  };

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const payment = stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    toast.promise(payment, {
      loading: "Loading...",
      success: <b>Payment success!</b>,
      error: <b>Failed to Pay add items to cart again.</b>,
    });
    
    const { error, paymentMethod } = await payment;
    if (error) {
      // console.log("[error]", error);
    } else {
      // console.log("paymentMethod:", paymentMethod);
      router.push("/")
    }
  };

  return (
    <LayoutPage title="Checkout">
      <Elements stripe={stripePromise} options={options}>
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
                      value={`$ ${profile?.cart?.totalPrice}`}
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
                        Total: $ {profile?.cart?.totalPrice}
                      </OrderInfoTitle>
                    </StyledRow>
                  </RightBox>
                </RightContainer>
              </StyledRow>
              <Divider2 />
              <CheckoutButton type="submit" disabled={!stripe}>
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
    const res = await axios.get(
      "https://omar-tech-store.herokuapp.com/api/config/stripe-key"
    );
    const publicKey = await res.data.publishableKey;
    await store.dispatch(getProfile());
    store.dispatch(reset());
    await store.dispatch(
      createOrder({
        address: "string",
        city: "string",
        postalCode: "number",
        country: "string",
      })
    );
    store.dispatch(reset());
    return {
      props: {
        publicKey,
      },
    };
  }
);

Checkout.auth = true;
