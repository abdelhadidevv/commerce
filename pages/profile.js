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
} from "../components/profile/style";
import Image from "next/image";

const Profile = () => {
  return (
    <LayoutPage title="Profile">
      <ProfileContainer>
        <TopContainer>
          <AvatarBox>
            <Image
              style={{ borderRadius: "50%" }}
              width={205}
              height={205}
              src="/images/avatar.jpg"
              alt=""
            />
          </AvatarBox>
          <GridInfo>
            <Info
              icon="/images/icons/user.svg"
              title="UserName"
              info="Lynn O’Leeum"
            />
            <Info
              icon="/images/icons/email-gray.svg"
              title="Address"
              info="test@test.com"
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
            
          </MobileLeftContainer>
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
