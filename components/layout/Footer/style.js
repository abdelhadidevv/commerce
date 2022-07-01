import styled, { css } from "styled-components";
import { mobile, desktop } from "../../../utils/media";

export const StyledFooter = styled.footer`
  min-height: 333px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 60px;
  padding-top: 63px;
  padding-bottom: 28px;
  border: 0.3px solid #afafaf;
  ${mobile(
    css`
      padding: 0 30px;
      padding-top: 24px;
      padding-bottom: 16px;
      gap: 10px;
    `,
    600
  )}
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap && gap};
  ${mobile(
    css`
      width: ${({ fw }) => fw && "100%"};
      align-items: ${({ fw }) => fw && "center"};
    `
  )}
  ${mobile(
    css`
      width: ${({ fillLinks }) => fillLinks && "100%"};
      align-items: ${({ fillLinks }) => fillLinks && "center"};
    `,
    429
  )}
`;

export const StyledRow = styled.div`
  display: flex;
  gap: ${({ gap }) => gap && gap};
  justify-content: ${({ justify }) => justify && justify};
  ${mobile(
    css`
      flex-wrap: wrap;
      gap: ${({ rowGap }) => rowGap && "30px"};
    `
  )}
  ${desktop(
    css`
      flex-wrap: ${({ equal }) => equal && "wrap"};
    `
  )}
    ${mobile(
    css`
      flex-wrap: ${({ equal }) => equal && "nowrap"};
    `
  )}

      ${mobile(
    css`
      flex-wrap: ${({ equal }) => equal && "wrap"};
      /* justify-content: ${({ equal }) => equal && "center"}; */
    `,
    400
  )}
`;

export const StyledLogo = styled.div`
  width: 188px;
  height: 39px;
  position: relative;
`;

export const StyledText = styled.p`
  width: 414px;
  color: #302f2f;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  ${mobile(
    css`
      text-align: center;
      width: auto;
      max-width: 414px;
    `
  )}
`;
export const StyledTextSm = styled(StyledText)`
  font-size: 14px;
`;

export const StyledTitle = styled.p`
  color: #302f2f;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledLink = styled.a`
  color: #646363;
  font-size: 14px;
  font-weight: 300;
`;

export const StyledInfo = styled.div`
  color: #646363;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  ${mobile(css`
    width: 50%;
  `)}
  ${mobile(
    css`
      width: 100%;
      justify-content: center;
    `,
    400
  )}
`;

export const CopyRights = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #6b6565;
  ${mobile(
    css`
      font-size: 12px;
    `,
    420
  )}
`;

export const StyledIcon = styled.img`
  width: ${({ sm }) => (sm ? "22px" : "26px")};
  height: ${({ sm }) => (sm ? "22px" : "26px")};
`;
