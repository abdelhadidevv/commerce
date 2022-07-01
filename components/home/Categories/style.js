import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";

export const CategoriesContainer = styled.div`
  width: 100vw;
  padding: 0px 60px;
  margin: 140px 0px;
  display: flex;
  flex-direction: column;
  ${mobile(
    css`
      padding: 0px 30px;
    `,
    800
  )}
`;

export const CategoriesColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoriesRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ fw }) => fw && "100%"};
  gap: ${({ fw }) => fw && "30px"};
  ${mobile(
    css`
      gap: ${({ fw }) => fw && "15px"};
    `,
    900
  )}
  flex-wrap: nowrap;
  ${mobile(
    css`
      flex-wrap: wrap;
      flex-direction: column-reverse;
    `
  )}
`;

export const CategoriesBox = styled.div`
  width: 50%;
  ${mobile(
    css`
      width: 100%;
    `
  )}
`;
export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  ${mobile(
    css`
      gap: 15px;
    `,
    900
  )}
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
