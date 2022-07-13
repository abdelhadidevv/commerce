import LayoutPage from "../components/layout/LayoutPage";
import {
  CategoriesContainer,
  StyledGridList,
} from "../components/categories/style";
import { StyledLgTitle } from "../components/shared/Title";
import CategoriesProductItem from "../components/shared/CategoriesProductItem";
import { useSelector, useDispatch } from "react-redux";
import store from "../store";
import {
  getProductsByCategory,
  rehydrate,
} from "../store/features/products/productsSlice";
import { useEffect, useState } from "react";

const Categories = ({ initialState }) => {
  const dispatch = useDispatch();
  const { productsByCategory, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [products, setProducts] = useState(null);

  useEffect(() => {
    dispatch(rehydrate(initialState.products));
  }, [dispatch, initialState]);

  useEffect(() => {
    if (isSuccess && productsByCategory) {
      setProducts(productsByCategory.products);
    }
  }, [productsByCategory, isSuccess]);

  return (
    <LayoutPage title="Categories">
      <CategoriesContainer>
        <StyledLgTitle>Featured Categories</StyledLgTitle>
        <StyledGridList>
          {products &&
            products.map((item) => (
              <CategoriesProductItem key={item._id} productData={item} />
            ))}
        </StyledGridList>
      </CategoriesContainer>
    </LayoutPage>
  );
};

export default Categories;

export async function getServerSideProps({ query }) {
  const { category } = query;
  await store.dispatch(getProductsByCategory(category));

  return {
    props: {
      initialState: store.getState(),
    },
  };
}
