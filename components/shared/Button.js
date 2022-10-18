import styled from "styled-components";

export const ButtonViewMore = styled.button`
  width: 260px;
  height: 55px;
  background: #ffffff;
  border: 0.4px solid #999999;
  border-radius: 9px;
  font-size: 20px;
  font-weight: 600;
  margin: ${({ m }) => m && m};
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease;
  :hover {
    color: #ffffff;
    background: #fa7400;
  }
`;
