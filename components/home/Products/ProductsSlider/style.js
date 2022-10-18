import styled, { css } from "styled-components";
import { mobile } from "../../../../utils/media";

export const ProductsSliderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductImageBox = styled.div`
  width: 200px;
  max-width: 200px;
  height: 200px;
  max-height: 200px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const ProductName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #111111;
  margin-top: 17px;
`;

export const ProductPrice = styled.p`
  border-radius: 17px;
  background: rgba(255, 79, 4, 9%);
  font-size: 14px;
  font-weight: 400;
  padding: 6px 13px;
  text-align: center;
  margin-top: 15px;
  color: #ff4f04;
`;
export const MoreInfo = styled.a`
  color: #898989;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #fa7400;
  }
`;
