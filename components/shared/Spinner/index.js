import { StyledSpinner, SpinnerContainer } from "./style";

const Spinner = ({ fill }) => (
  <SpinnerContainer fill={fill}>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </SpinnerContainer>
);

export default Spinner;
