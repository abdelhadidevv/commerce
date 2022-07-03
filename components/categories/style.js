import styled, { css } from "styled-components";
import { mobile, desktop } from "../../utils/media";

export const CategoriesContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 60px;
  padding-top: 50px;
  padding-bottom: 85px;
  overflow: hidden;
`;

export const StyledGridList = styled.div`
  display: grid;
  gap: 45px;
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
