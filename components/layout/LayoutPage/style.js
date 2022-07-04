import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";

export const StyledLayoutPage = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding-top: ${({ mt0 }) => (mt0 ? "0px" : "100px")};
  ${mobile(
    css`
      padding-top: ${({ mt0 }) => (mt0 ? "0px" : "86px")};
    `,
    600
  )}
`;
