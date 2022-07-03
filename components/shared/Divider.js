import styled,{css} from "styled-components";
import { mobile, desktop } from "../../utils/media";

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #707070;
  ${mobile(
    css`
      display: ${({ lg }) => lg && "none"};
    `
  )}
  ${mobile(
    css`
      display: ${({ sm }) => sm && "block"};
      margin-bottom: 40px;
    `
  )}
  ${desktop(
    css`
      display: ${({ sm }) => sm && "none"};
    `
  )}
  ${desktop(
    css`
      display: ${({ lg }) => lg && "block"};
    `
  )}
`;
export const Divider2 = styled.div`
  width: 100%;
  height: 1px;
  background: #c4c4c4;
`;

export const Divider3 = styled(Divider2)`
  background: #707070;
`;
