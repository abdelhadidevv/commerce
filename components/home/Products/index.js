import { ProductsContainer, StyledBox } from "./style";
import ProductsSlider from "./ProductsSlider";
import { StyledLgTitle, StyledSmTitle } from "../../shared/Title";
import { ButtonViewMore } from "../../shared/Button";

const Products = () => {
  return (
    <>
      <ProductsContainer>
        <StyledSmTitle>Devices</StyledSmTitle>
        <StyledLgTitle>Featured products</StyledLgTitle>
      </ProductsContainer>
      <ProductsSlider />
      <StyledBox>
        <ButtonViewMore>View More</ButtonViewMore>
      </StyledBox>
    </>
  );
};

export default Products;
