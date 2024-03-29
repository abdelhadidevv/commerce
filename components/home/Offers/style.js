import styled, { css } from "styled-components";
import { mobile, desktop } from "../../../utils/media";

export const OffersBox = styled.div`
  width: 100%;
  height: 277px;
  max-height: 277px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/offers.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0px 200px;
  overflow: hidden;
  ${mobile(
    css`
      padding: 0px 50px;
      background-size: contain contain;
    `
  )}
  ${mobile(
    css`
      height: 150px;
    `,
    900
  )}
  ${mobile(
    css`
      padding: 0px 20px;
    `,
    550
  )}
`;

export const OffersContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile(
    css`
      flex-direction: column;
      gap: 10px;
    `,
    415
  )}
`;

export const OffersTitle = styled.h2`
  height: min-content;
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
`;

export const OffersButton = styled.button`
  height: min-content;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 9px;
  padding: 14px 60px;
  transition: background 0.3s ease;
  :hover {
    background: #fa7400;
  }
  ${mobile(
    css`
      padding: 14px 20px;
    `,
    550
  )}
`;
