import LayoutPage from "../components/layout/LayoutPage";
import {
  CartContainer,
  BackButton,
  CartList,
  PaymentButton,
} from "../components/cart/style";
import CartItem from "../components/cart/CartItem";
import Image from "next/image";
import Link from "next/link";
import Spinner from "../components/shared/Spinner";
import { wrapper } from "../store/store";
import { useSelector } from "react-redux";
import { getProfile } from "../store/features/user/userSlice";
import { getSession } from "next-auth/react";
import { setAxiosToken } from "../lib/configAxios";

const Cart = () => {
  const { profile, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  return (
    <LayoutPage title="Cart" protected>
      {isLoading ? (
        <Spinner fill />
      ) : (
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
            {profile?.cart?.items.length > 0 ? (
              profile?.cart?.items.map((item) => (
                <CartItem key={item._id} itemData={item} />
              ))
            ) : (
              <>Empty Cart!</>
            )}
          </CartList>
          <Link href="/checkout">
            <PaymentButton>Go To Payment</PaymentButton>
          </Link>
        </CartContainer>
      )}
    </LayoutPage>
  );
};

export default Cart;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const session = await getSession({ req: ctx.req });
    setAxiosToken(session?.user?.token);
    await store.dispatch(getProfile());
  }
);

Cart.auth = true;
