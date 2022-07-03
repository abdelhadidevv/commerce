import {
  LabelContent,
  InputRadio,
  ColumnRadio,
  ColorBox,
} from "./style";

const RadioColor = ({ id, c1, c2 }) => {
  return (
    <ColumnRadio>
      <LabelContent htmlFor={id}>
        <ColorBox bg={c1} />
        <ColorBox bg={c2} />
      </LabelContent>
      <InputRadio type="radio" id={id} name="color" value="" />
    </ColumnRadio>
  );
};

export default RadioColor;
