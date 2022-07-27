import LayoutPage from "../components/layout/LayoutPage";
import {
  CategoriesContainer,
  StyledGridList,
} from "../components/categories/style";
import { StyledLgTitle } from "../components/shared/Title";
import CategoriesProductItem from "../components/shared/CategoriesProductItem";
import { wrapper } from "../store/store";
import { useSelector } from "react-redux";
import { getProductsByCategory } from "../store/features/products/productsSlice";

const Categories = () => {
  const { productsByCategory, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  return (
    <LayoutPage title="Categories">
      <CategoriesContainer>
        <StyledLgTitle>Featured Categories</StyledLgTitle>
        <StyledGridList>
          {productsByCategory &&
            productsByCategory?.products?.map((item) => (
              <CategoriesProductItem key={item._id} productData={item} />
            ))}
        </StyledGridList>
      </CategoriesContainer>
    </LayoutPage>
  );
};

export default Categories;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { category } = query;
      await store.dispatch(getProductsByCategory(category));
    }
);
