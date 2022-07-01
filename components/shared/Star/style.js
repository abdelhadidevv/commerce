import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    font-size: 15px;
    font-weight: 400;
    color: #afafaf;
  }
`;

export const StarBox = styled(StarContainer)`
  gap: 3px;
`;
