import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";

export const CategoriesProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f8f8;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
`;

export const StyledIconBox = styled.div`
  width: ${({ w }) => w && w};
  height: ${({ h }) => h && h};
  align-self: ${({ aSelf }) => aSelf && aSelf};
`;

export const StyledImageBox = styled.div`
  width: 100%;
  min-height: 270px;
  max-height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProductName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  :hover {
    color: #fa7400;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${({ m }) => m && m};
`;
