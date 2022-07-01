import styled from "styled-components";

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

export const StyledProductName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${({ m }) => m && m};
`;
