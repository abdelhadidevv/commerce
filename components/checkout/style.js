import styled, { css } from "styled-components";
import { mobile } from "../../utils/media";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 55px 60px 60px;
  ${mobile(css`
    padding: 19px 15px 15px;
  `)}
`;

export const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-top: ${({ mt }) => mt && mt};
`;

export const CheckoutButton = styled.button`
  width: 202px;
  height: 47px;
  background: #fa7400;
  border: 0.4px solid #afafaf;
  border-radius: 4px;
  margin-top: 35px;
  font-size: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  text-decoration: none;
  ${mobile(
    css`
      width: 100%;
    `,
    600
  )}
  cursor: pointer;
`;

export const LeftContainer = styled.div`
  width: 65%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  ${mobile(css`
    width: 100%;
  `)}
`;

export const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin-top: 16px;
`;

export const StyledRow = styled.div`
  display: flex;
  gap: ${({ gap }) => gap && "40px"};
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
  ${mobile(css`
    flex-direction: ${({ mb }) => mb && "column"};
    gap: ${({ gap }) => gap && "16px"};
  `)}
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  margin-top: 16px;
  padding: 20px 30px;
  outline: none;
  border: 0.3px solid #707070;
  box-shadow: 0px 12px 10px rgba(0, 0, 0, 8%);
  ::placeholder {
    color: #707070;
  }
`;

export const RightContainer = styled.div`
  width: 35%;
  height: fit-content;
  flex-direction: column;
  margin-top: 106px;
  ${mobile(css`
    width: 100%;
    margin-top: 0px;
  `)}
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.3px solid #646363;
  border-radius: 4px;
  padding: 20px 60px;
  gap: 40px;
  ${mobile(css`
    padding: 20px 10px;
  `)}
`;

export const OrderInfoTitle = styled(StyledTitle)`
  color: ${({ color }) => (color ? color : "#A8A6A6")};
  font-size: ${({ fSize }) => (fSize ? fSize : "20px")};
`;

export const OrderInfoValue = styled(StyledTitle)`
  color: #646363;
`;
