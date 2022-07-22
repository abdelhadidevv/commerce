import LayoutPage from "../../components/layout/LayoutPage";
import {
  ProductDetailsContainer,
  ImageDisplay,
  DetailsContent,
  DetailsColumn,
  RowGap,
  SmImageDisplay,
  SmImageBox,
  ProductTitle,
  SmText,
  Span,
  Select,
  Button,
} from "../../components/product-details/style";
import RadioColor from "../../components/shared/RadioColor";
import { Divider } from "../../components/shared/Divider";
import { wrapper } from "../../store/store";
import { getProductById } from "../../store/features/products/productsSlice";
import { addToCart } from "../../store/features/user/userSlice";
import { AddToCartSchema } from "../../utils/validationSchema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productById, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const user = useSelector((state) => state.user);
  const [imageIndex, setImageIndex] = useState(0);

  const formik = useFormik({
    initialValues: {
      productId: "",
      qty: 1,
    },
    validationSchema: AddToCartSchema,
    onSubmit: (values) => {
      dispatch(addToCart(values));
      alert("added !");
    },
  });

  useEffect(() => {
    if (isSuccess && productById) {
      formik.setFieldValue("productId", productById?._id);
    }
  }, [productById, isSuccess]);

  const handleImageIndex = (index) => {
    setImageIndex(index);
  };

  return (
    <LayoutPage title="ProductDetails">
      {productById && (
        <ProductDetailsContainer onSubmit={formik.handleSubmit}>
          <DetailsContent>
            <DetailsColumn>
              <ImageDisplay src={productById?.images[imageIndex]} />
              <RowGap gap="13px">
                {productById?.images?.map((item, index) => (
                  <SmImageBox
                    key={item}
                    onClick={() => handleImageIndex(index)}
                  >
                    <SmImageDisplay src={item} />
                  </SmImageBox>
                ))}
              </RowGap>
            </DetailsColumn>

            <DetailsColumn>
              <ProductTitle>{productById?.name}</ProductTitle>
              <SmText color="#9B9A9A">{productById?.description}</SmText>
              <SmText color="#707070" fz="20px" mt="10px">
                Availability in stock:{" "}
                {productById?.countInStock > 0 ? (
                  <Span>Available</Span>
                ) : (
                  <Span red>Out of Stock</Span>
                )}
              </SmText>
              <Divider />
              <SmText fw="600" mt="25px">
                Choose your combination
              </SmText>
              <RowGap gap="40px">
                {productById?.colors?.map((item) => (
                  <RadioColor
                    key={item._id}
                    id={item._id}
                    c1={item.one}
                    c2={item.two}
                  />
                ))}
              </RowGap>
              <GetSelectOption
                title="Size and Weight"
                options={productById?.size}
              />
              <GetSelectOption title="Chip" options={productById?.chip} />
              <GetSelectOption title="Storage" options={productById?.storage} />
              <GetSelectOption title="Memory" options={productById?.memory} />
              <Button type="submit">Add To Cart</Button>
            </DetailsColumn>
          </DetailsContent>
        </ProductDetailsContainer>
      )}
    </LayoutPage>
  );
};

export default ProductDetails;

const GetSelectOption = ({ title, options }) =>
  options &&
  options?.length !== 0 && (
    <>
      <SmText fw="600" mt="25px">
        {title}
      </SmText>
      <Select>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </>
  );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(getProductById(params.productId));
    }
);
