import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 60px;
  margin-top: 100px;
  ${mobile(
    css`
      padding: 0px 30px;
    `,
    800
  )}
  ${mobile(
    css`
      padding: 0px 10px;
    `,
    500
  )}
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  margin-bottom:67px;
`;
