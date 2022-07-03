import styled from "styled-components";

export const StyledLayoutPage = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding-top: ${({ mt0 }) => (mt0 ? "0px" : "100px")};
`;
