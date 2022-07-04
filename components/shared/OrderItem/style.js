import styled, { css } from "styled-components";
import { mobile } from "../../../utils/media";
import { ImageBox } from "../../cart/style";

export const OrderContainer = styled.div`
  min-width: 100%;
  height: 146px;
  max-height: 146px;
  display: flex;
  padding: 10px 14px;
  justify-content: flex-start;
  align-items: center;
  background: #fdfdfd;
  border: 0.3px solid #707070;
  border-radius: 4px;
  gap: 40px;
  ${mobile(
    css`
      padding: 19px 15px;
    `,
    1000
  )}
`;

export const OrderImageBox = styled(ImageBox)`
`;

export const OrderItemName = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: #646363;
  margin-left: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${mobile(css``)}
`;

export const OrderItemPrice = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: #0ea965;
  margin-right: 10px;
  justify-self: flex-end;
  ${mobile(css``)}
`;
