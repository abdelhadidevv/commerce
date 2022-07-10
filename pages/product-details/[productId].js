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
import Spinner from "../../components/shared/Spinner";
import {
  getProductById,
  reset,
} from "../../store/features/products/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  const dispatch = useDispatch();
  const { productById, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!router.isReady) return;

    dispatch(getProductById(productId));
    dispatch(reset());
  }, [router]);

  useEffect(() => {
    if (isSuccess && productById) {
      setProduct(productById);
    }
  }, [productById, isSuccess]);

  const handleImageIndex = (index) => {
    setImageIndex(index);
  };

  return (
    <LayoutPage title="ProductDetails">
      {isLoading ? (
        <Spinner fill />
      ) : (
        product && (
          <ProductDetailsContainer>
            <DetailsContent>
              <DetailsColumn>
                <ImageDisplay src={product?.images[imageIndex]} />
                <RowGap gap="13px">
                  {product?.images?.map((item, index) => (
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
                <ProductTitle>{product?.name}</ProductTitle>
                <SmText color="#9B9A9A">{product?.description}</SmText>
                <SmText color="#707070" fz="20px" mt="10px">
                  Availability in stock:{" "}
                  {product?.countInStock > 0 ? (
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
                  {product?.colors?.map((item) => (
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
                  options={product?.size}
                />
                <GetSelectOption title="Chip" options={product?.chip} />
                <GetSelectOption title="Storage" options={product?.storage} />
                <GetSelectOption title="Memory" options={product?.memory} />
                <Button>Add To Cart</Button>
              </DetailsColumn>
            </DetailsContent>
          </ProductDetailsContainer>
        )
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
