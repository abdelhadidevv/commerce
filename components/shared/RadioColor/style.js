import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: ${({ margin }) => margin && margin};
`;

export const ColumnRadio = styled(Column)`
  width: fit-content;
  align-items: center;
`;

export const LabelContent = styled.label`
  display: flex;
`;

export const InputRadio = styled.input`
  margin-top: 12px;
  width: 25px;
  height: 25px;
  :checked {
    background: #fa7400;
  }
`;

export const ColorBox = styled.div`
  width: 47px;
  height: 47px;
  box-shadow: 0px 3px 6px #00000029;
  /* border: 0.3px solid #c4c2c2; */
  background-color: ${({ bg }) => bg};
`;
