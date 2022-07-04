import styled, { css } from "styled-components";
import { mobile } from "../../utils/media";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 140px;
  ${mobile(
    css`
      padding: 19px 15px;
    `,
    1000
  )}
`;

export const BackButton = styled.a`
  display: flex;
  gap: 9px;
`;

export const CartList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  ${mobile(css`
    gap: 14px;
  `)}
  ${mobile(
    css`
      margin-top: 19px;
    `,
    1000
  )}
`;

export const CartItemContainer = styled.div`
  width: 100%;
  height: 146px;
  background: #fdfdfd;
  border: 0.3px solid #707070;
  border-radius: 4px;
  display: flex;
  padding: 10px 16px;
  display: flex;
  align-content: center;
`;

export const ImageBox = styled.div`
  width: 174px;
  max-width: 174px;
  height: 100%;
  background: #e3e3e3;
  border: 0.3px solid #707070;
  border-radius: 4px;
  display: flex;
  padding: 8px 8px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CartItemName = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: #646363;
  margin-left: 90px;
  ${mobile(css`
    margin-left: 0px;
  `)}
`;

export const QuantityInput = styled.input`
  width: 44px;
  height: 38px;
  font-size: 20px;
  font-weight: 500;
  color: #646363;
  background: #fff;
  border: 0.3px solid #646363;
  border-radius: 4px;
  margin: 0px 20px;
  text-align: center;
  outline: none;
  overflow-x: hidden;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const QuantityButton = styled.button`
  font-size: 40px;
  font-weight: 600;
  color: #646363;
  background: transparent;
  border: none;
  ${mobile(css`
    margin-left: ${({ mb }) => mb && "23px"};
  `)}
`;

export const CartItemPrice = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: #0ea965;
  margin-right: 60px;
  ${mobile(css`
    margin-right: 0px;
  `)}
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap && gap};
  justify-content: ${({ jContent }) => jContent && jContent};
  width: ${({ fill }) => fill && "100%"};
  ${mobile(css`
    flex-direction: ${({ mb }) => mb && "column"};
    gap: ${({ mb }) => mb && "28px"};
  `)}
  ${mobile(css`
    flex-direction: ${({ mbReverse }) => mbReverse && "column-reverse"};
    height: ${({ mbReverse }) => mbReverse && "100%"};
    justify-content: ${({ mbReverse }) => mbReverse && "space-between"};
    justify-content: ${({ mbReverse }) => mbReverse && "space-between"};
    padding-top: ${({ mbReverse }) => mbReverse && "10px"};
    padding-bottom: ${({ mbReverse }) => mbReverse && "10px"};
  `)}
`;

export const PaymentButton = styled.a`
  width: 202px;
  height: 47px;
  background: #fa7400;
  border: 0.4px solid #afafaf;
  border-radius: 4px;
  margin-top: 19px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  text-decoration: none;
  ${mobile(
    css`
      width: 100%;
    `,
    600
  )}
`;
