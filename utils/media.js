import { css } from "styled-components";

export const mobile = (inner, size = 1335) => css`
  @media (max-width: ${size}px) {
    ${inner};
  }
`;

export const desktop = (inner, size = 1336) => css`
  @media (min-width: ${size}px) {
    ${inner};
  }
`;
