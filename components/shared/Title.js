import styled, { css } from "styled-components";
import { mobile } from "../../utils/media";

export const StyledLgTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #111111;
  text-transform: uppercase;
  text-align: left;
  white-space: nowrap;
  ${mobile(
    css`
      text-align: center;
    `
  )}
`;

export const StyledSmTitle = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #111111;
  text-transform: uppercase;
  text-align: left;
  ${mobile(
    css`
      text-align: center;
    `
  )}
`;
