import styled, { css } from "styled-components";
import { mobile } from "../../../../utils/media";

export const SingleSliderContainer = styled.div`
  border-radius: 8px;
  background: #f9f8f8;
  height: 825px;
  overflow: hidden;
`;

export const SingleItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 40px;
  ${mobile(
    css`
      padding: 20px;
    `,
    450
  )}
`;

export const StyledColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ align }) => align && align};
  margin: ${({ margin }) => margin && margin};
`;

export const Discount = styled.p`
  width: 145px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  background-color: #fa740073;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  align-self: flex-start;
  ${mobile(
    css`
      width: 100px;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
    `,
    450
  )}
`;

export const SliderImageBox = styled.img`
  width: 100%;
  height: 550px;
  margin: 20px 0px 40px 0px;
  ${mobile(
    css`
      height: 250px;
      margin: 10px 0px 20px 0px;
    `,
    450
  )}
`;

export const DiscountPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #6a707e;
  margin-right: 15px;
  text-decoration: line-through;
  text-decoration-color: red;
  ${mobile(
    css`
      font-size: 17px;
    `,
    450
  )}
`;

export const Name = styled.p`
  font-size: 37px;
  font-weight: 600;
  color: #111111;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
  ${mobile(
    css`
      font-size: 20px;
    `,
    450
  )}
`;

export const Text = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  color: ${({ color }) => (color ? color : "#111111")};
  font-family: Poppins, sans-serif;
  ${mobile(
    css`
      font-size: ${({ lg }) => (lg ? "20px" : "14px")};
    `,
    450
  )}
`;

export const Price = styled.p`
  /* width: ${({ w }) => (w ? w : "93px")}; */
  padding: 0px 15px;
  height: min-content;
  line-height: ${({ h }) => (h ? h : "50px")};
  font-size: ${({ fsize }) => (fsize ? fsize : "23px")};
  color: #0ea965;
  font-weight: 500;
  border-radius: 17px;
  text-align: center;
  background-color: #ffffff;
  ${mobile(
    css`
      width: 65px;
      height: 35px;
      line-height: 35px;
      font-size: 17px;
    `,
    450
  )}
`;
