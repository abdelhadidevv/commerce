import LayoutPage from "../components/layout/LayoutPage";
import {
  ProfileContainer,
  RowBox,
  TopContainer,
  LeftContainer,
  AvatarBox,
  GridInfo,
  InfoBox,
  InfoTitle,
  InfoInfo,
  StyledTab,
  Logout,
  MobileLeftContainer,
  MobileStyledTab,
  RightContainer,
  MobileLogout,
} from "../components/profile/style";
import Image from "next/image";
import OrderItem from "../components/shared/OrderItem";
import { useSelector } from "react-redux";
import { getProfile, getUserOrders } from "../store/features/user/userSlice";
import { wrapper } from "../store/store";
import { getSession } from "next-auth/react";
import { setAxiosToken } from "../lib/configAxios";

const Profile = () => {
  const { profile, userOrders, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.user);

  return (
    <LayoutPage title="Profile">
      <ProfileContainer>
        <TopContainer>
          <AvatarBox>
            <Image
              style={{ borderRadius: "50%" }}
              width={205}
              height={205}
              src={
                profile?.profileImage
                  ? profile?.profileImage
                  : "/images/avatar.jpg"
              }
              alt=""
            />
          </AvatarBox>
          <GridInfo>
            <Info
              icon="/images/icons/user.svg"
              title="UserName"
              info={profile?.firstName + " " + profile?.lastName}
            />
            <Info
              icon="/images/icons/email-gray.svg"
              title="Address"
              info={profile?.email}
            />
            <Info
              icon="/images/icons/job.svg"
              title="Title"
              info="Networks engineer"
            />
            <Info
              icon="/images/icons/call.svg"
              title="Cell Phone"
              info="+1-111-111-1111"
            />
          </GridInfo>
        </TopContainer>
        <RowBox>
          <LeftContainer>
            <StyledTab active>My Orders</StyledTab>
            <StyledTab>Wishlist</StyledTab>
            <StyledTab>Notifications</StyledTab>
            <StyledTab>Settings</StyledTab>
            <Logout>Logout</Logout>
          </LeftContainer>
          <MobileLeftContainer>
            <MobileStyledTab active>My Orders</MobileStyledTab>
            <MobileStyledTab>Wishlist</MobileStyledTab>
            <MobileStyledTab>Notifications</MobileStyledTab>
            <MobileStyledTab>Settings</MobileStyledTab>
          </MobileLeftContainer>
          <RightContainer>
            {userOrders?.orders?.length > 0 ? (
              userOrders?.orders.map((item) => (
                <OrderItem key={item._id} orderData={item} />
              ))
            ) : (
              <>You not order any product yet!</>
            )}
          </RightContainer>
          <MobileLogout>Logout</MobileLogout>
        </RowBox>
      </ProfileContainer>
    </LayoutPage>
  );
};

export default Profile;

const Info = ({ icon, title, info }) => {
  return (
    <InfoBox>
      <Image width={19} height={18} src={icon} alt="" />
      <InfoTitle>{title}</InfoTitle>
      <InfoInfo>{info}</InfoInfo>
    </InfoBox>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const session = await getSession({ req: ctx.req });
    setAxiosToken(session?.user?.token);
    await store.dispatch(getProfile());
    await store.dispatch(getUserOrders());
  }
);

Profile.auth = true;
