import styled from "styled-components";

export const Price = styled.p`
  background: #fff;
  border-radius: 9px;
  padding: ${({ p }) => p && p};
  font-size: 18px;
  font-weight: 400;
  color: #0ea965;
`;

export const ProductPrice = styled.p`
  border-radius: 17px;
  background: rgba(255, 79, 4, 9%);
  font-size: 14px;
  font-weight: 400;
  padding: 6px 13px;
  text-align: center;
  margin-top:  ${({ mt0 }) => mt0 ? "0px":"15px"};
  color: #ff4f04;
`;