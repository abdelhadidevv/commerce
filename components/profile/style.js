import styled, { css } from "styled-components";
import { mobile } from "../../utils/media";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowBox = styled.div`
  display: flex;
  width: 100%;
  ${mobile(
    css`
      flex-direction: column;
    `,
    1480
  )}
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 232px;
  background-image: url("./images/banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover cover;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  ${mobile(
    css`
      width: 100%;
    `,
    600
  )}
  ${mobile(
    css`
      height: 211px;
      padding: 26px 21px;
      justify-content: flex-start;
      align-items: flex-start;
    `,
    1480
  )}
`;

export const AvatarBox = styled.div`
  width: 205px;
  height: 205px;
  position: absolute;
  bottom: -63px;
  left: 350px;
  z-index: 1;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 59%);
  border-radius: 50%;
  ${mobile(
    css`
      left: 22px;
      bottom: -45px;

      width: 90px;
      height: 90px;
    `,
    1480
  )}
`;

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 130px;
  grid-gap: 19px;
  ${mobile(
    css`
      grid-template-columns: repeat(1, 1fr);
      margin-right: 0px;
      grid-gap: 15px;
    `,
    1480
  )}
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

export const InfoTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  ${mobile(
    css`
      font-size: 14px;
    `,
    1480
  )}
`;

export const InfoInfo = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #545454;
  margin-left: 20px;
  ${mobile(
    css`
      font-size: 14px;
    `,
    1480
  )}
`;

export const LeftContainer = styled.div`
  width: 350px;
  min-width: 350px;
  height: 698px;
  background: #f5f5f5;
  border-right: 0.3px solid #afafaf;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 120px;
  padding-bottom: 50px;
  ${mobile(
    css`
      display: none;
    `,
    1480
  )}
`;

export const StyledTab = styled.a`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: #646363;
  padding: 15px 0px;
  margin-bottom: 15px;
  text-align: center;
  background: ${({ active }) => (active ? "#FFFFFF" : "transparent")};
  border-left: ${({ active }) => (active ? "12px solid #FA7400" : "none")};
  border-top: ${({ active }) => (active ? "0.3px solid #AFAFAF" : "none")};
  border-bottom: ${({ active }) => (active ? "0.3px solid #AFAFAF" : "none")};
  ${mobile(css``, 1480)}
`;

export const Logout = styled(StyledTab)`
  color: #d21010;
  margin-bottom: 0px;
  border: none;
  justify-self: flex-end;
`;

export const MobileLogout = styled(Logout)`
  display: none;
  text-align: start;
  margin: 0px 16px 40px;
  ${mobile(
    css`
      display: block;
    `,
    1480
  )}
`;

export const MobileLeftContainer = styled.div`
  display: none;
  gap: 36px;
  padding: 0px 13px;
  padding-top: 60px;
  flex-wrap: wrap;
  ${mobile(
    css`
      display: flex;
    `,
    1480
  )}
`;

export const MobileStyledTab = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding: 7px;
  border-radius: 21px;
  background: ${({ active }) => (active ? "#FA7400" : "transparent")};
  color: ${({ active }) => (active ? "#FFFFFF" : "#646363")};
  border: ${({ active }) => (active ? "0.3px solid #707070" : "none")};
  ${mobile(css``, 1480)}
`;

export const RightContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 29px 44px;
  margin-top: 140px;
  border: 0.3px solid #646363;
  border-radius: 9px;
  padding: 34px 55px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 38px;

  ${mobile(
    css`
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 16px;
      margin: 12px 15px 27px 15px;
      padding: 24px;
      width: auto;
    `,
    1480
  )}
`;
