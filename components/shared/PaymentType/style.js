import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";

export const PaymentTypeContainer = styled.div`
  width: 100%;
  height: 97px;
  background: #ebeff0;
  border-radius: 10px;
  border: 0.3px solid #afafaf;
  padding: 30px 26px;
  margin-top: 16px;
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  ${mobile(css`
    padding: 20px 16px;
    height: 45px;
  `,550)}
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-left: 20px;
  width: 100%;
  ${mobile(css`
    font-size: 12px;
  `,550)}
`;

export const InputRadio = styled.input`
  width: 25px;
  height: 25px;
  :checked {
    background: #fa7400;
    color: #fa7400;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 19px;
  margin-right: 170px;
  ${mobile(css`
    margin-right: 0px;
  `)}
`;
