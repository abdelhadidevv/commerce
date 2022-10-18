import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";

export const TrendingContainer = styled.div`
  background: #f9f8f8;
  display: flex;
  flex-direction: column;
  padding: 0px 60px;
  padding-top: 94px;
  padding-bottom: 70px;
  ${mobile(
    css`
      padding: 0px 25px;
      padding-top: 94px;
      padding-bottom: 70px;
    `,
    800
  )}
  ${mobile(
    css`
      padding: 0px 10px;
      padding-top: 94px;
      padding-bottom: 70px;
    `,
    500
  )}
`;

export const StyledBox = styled.div`
  display: grid;
  gap: 70px;
  padding-top: 42px;
  grid-template-columns: repeat(4, 1fr);
  ${mobile(
    css`
      gap: 40px;
    `,
    1405
  )}
  ${mobile(
    css`
      gap: 10px;

      grid-template-columns: repeat(3, 1fr);
    `
  )}
    ${mobile(
    css`
      grid-template-columns: repeat(2, 1fr);
    `,
    940
  )}
      ${mobile(
    css`
      grid-template-columns: repeat(1, 1fr);
    `,
    600
  )}
`;

export const TrendingProductItemCard = styled.div`
  width: 269px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  gap: 8px;
`;

export const ImageBox = styled.div`
  width: 269px;
  height: 269px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.3px solid #575252;
  border-radius: 8px;
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #111111;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  :hover {
    color: #fa7400;
  }
`;
