import styled, { css } from "styled-components";
import { mobile, desktop } from "../../../utils/media";

export const StyledNavbar = styled.header`
  height: 100px;
  max-height: 100px;
  background: rgba(247, 247, 247, 0.79);
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 2;
  padding: 0 60px;
  ${mobile(
    css`
      padding: 0 16px;
      height: 86px;
      max-height: 86px;
      gap: 10px;
    `,
    600
  )}
`;

export const StyledBox = styled.div`
  display: flex;
  gap: ${({ gap }) => gap && gap};
  align-items: center;
  ${mobile(css`
    display: none;
  `)}
`;
export const StyledBoxMobile = styled(StyledBox)`
  ${mobile(css`
    display: flex;
    flex-direction: column;
  `)}
  ${desktop(css`
    display: none;
  `)}
`;

export const StyledSelect = styled.select`
  width: 125px;
  height: 43px;
  background: #7b77770f;
  border-radius: 3px;
  outline: none;
  border: none;
  padding-left: 19px;
`;

export const StyledIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${({ active }) => (active ? "#FA7400" : "#32353C")};
  font-weight: 300;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  background: #f9f8f8;
  border: 0.3px solid #afafaf;
  box-shadow: 0px 3px 6px #f9f8f88a;
  color: #fa7400;
  font-weight: 600;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  ${mobile(css`
    width: auto;
    font-size: 14px;
    border: none;
    box-shadow: none;
    background: none;
  `)}
`;
