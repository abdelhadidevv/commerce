import LayoutPage from "../components/layout/LayoutPage";
import {
  CategoriesContainer,
  StyledGridList,
} from "../components/categories/style";
import { StyledLgTitle } from "../components/shared/Title";
import CategoriesProductItem from "../components/shared/CategoriesProductItem";

const Categories = () => {
  return (
    <LayoutPage title="Categories">
      <CategoriesContainer>
        <StyledLgTitle>Featured Categories</StyledLgTitle>
        <StyledGridList>
          <CategoriesProductItem />
          <CategoriesProductItem />
          <CategoriesProductItem />
          <CategoriesProductItem />
          <CategoriesProductItem />
          <CategoriesProductItem />
          <CategoriesProductItem />
        </StyledGridList>
      </CategoriesContainer>
    </LayoutPage>
  );
};

export default Categories;
