import styled, { css } from "styled-components";
import { mobile, desktop } from "../../../utils/media";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ img }) =>
    img ? `url(${img})` : `url(./images/bg.png)`};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px 60px;
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  ${mobile(css`
    align-items: center;
  `)}
  ${mobile(
    css`
      padding: 0px 20px;
      padding-top: 60px;
      padding-bottom: 50px;
    `,
    600
  )}
`;

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 600;
  color: #ffffff;
  line-height: 72px;
  text-transform: uppercase;
  margin-top: 150px;
  ${mobile(
    css`
      font-size: 32px;
      text-align: center;
    `,
    710
  )}
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
  ${mobile(
    css`
      font-size: 16px;
      text-align: center;
    `,
    710
  )}
`;

export const SpaceBetweenBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const BtnStartShopping = styled.button`
  width: 260px;
  height: 55px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #ffffff5c;
  border: 0.4px solid #999999;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${mobile(
    css`
      width: 165px;
      height: 38px;
      font-size: 16px;

      img {
        width: 15px;
        height: 15px;
      }
    `,
    710
  )}
`;

export const BtnNext = styled.div`
  width: 51px;
  height: 51px;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
