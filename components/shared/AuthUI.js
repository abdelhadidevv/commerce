import styled, { css } from "styled-components";
import { mobile } from "../../utils/media";

export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  ${mobile(
    css`
      height: auto;
      flex-direction: column;
    `,
    1500
  )}
`;

export const LeftBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  background-image: linear-gradient(#fa7400, #7d3a00);
  padding: 0px 70px;
  ${mobile(
    css`
      width: 100%;
      align-items: center;
      padding: 30px 30px;
    `,
    1500
  )}
`;

export const RightBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  ${mobile(
    css`
      width: 100%;
      padding: 0px 20px;
      padding-top: 34px;
    `,
    1500
  )}
`;

export const AuthTitle = styled.h1`
  width: 100%;
  font-size: 35px;
  font-weight: 500;
  color: #f3f3f3;
  margin-top: 40px;
  margin-left: 20px;
  ${mobile(
    css`
      align-self: center;
      text-align: center;
    `,
    1500
  )}
`;

export const AuthSubTitle = styled.h2`
  font-size: 25px;
  font-weight: 300;
  color: #e2b792;
  margin-top: 20px;
  margin-left: 20px;
  ${mobile(
    css`
      align-self: center;
      text-align: center;
    `,
    1500
  )}
`;

export const AuthImageBox = styled.div`
  width: 500px;
  height: 370px;
  overflow: hidden;
  ${mobile(
    css`
      width: 400px;
    `,
    550
  )}
  ${mobile(
    css`
      width: 300px;
    `,
    350
  )}
`;

export const StyledBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 673px;
  height: 100%;
  gap: 18px;
`;

export const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  border-left: 8px solid #f6921e;
  padding-left: 20px;
  margin-bottom: 14px;
  align-self: baseline;
  text-transform: uppercase;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 80px;
  font-size: 18px;
  font-weight: 400;
  color: #707070;
  padding-left: 15px;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 8%);
  border: none;
  outline: none;
  :placeholder {
    color: #b9b9b9;
  }
  :focus {
    border-left: 6px solid #f6921e;
  }
  ${mobile(
    css`
      height: 38px;
    `,
    600
  )}
`;

export const StyledSend = styled.button`
  font-size: 20px;
  font-weight: 500;
  color: #707070;
  border: none;
  background: transparent;
  text-transform: uppercase;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: pointer;
`;

export const StyledLink = styled.a`
  width: 673px;
  max-width: 673px;
  margin: 0px auto;
  font-size: 20px;
  font-weight: 300;
  color: #707070;
  text-decoration: none;
  cursor: default;
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: flex-start;
  margin-bottom: 40px;
  span {
    font-weight: 500;
    color: #3b3b3b;
    cursor: pointer;
  }

  ${mobile(
    css`
      width: auto;
      align-self: center;
      margin-top: 120px;
      font-size: 17px;
    `,
    1500
  )}
`;
