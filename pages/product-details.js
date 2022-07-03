import LayoutPage from "../components/layout/LayoutPage";
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
} from "../components/product-details/style";
import RadioColor from "../components/shared/RadioColor";
import { Divider } from "../components/shared/Divider";
import { useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    images: [
      "https://nordace.com/wp-content/uploads/2018/12/4-3-828x828.jpg",
      "https://nordace.com/wp-content/uploads/2019/07/Nordace_Siena_Green_24.jpg",
      "https://nordace.com/wp-content/uploads/2021/12/Siena-Classic-Aqua-1.jpg",
      "https://nordace.com/wp-content/uploads/2018/12/IMG_5217_V1-1380x1380.jpg",
    ],
    colors: [
      ["#3f3f41", "#d3ae9e"],
      ["#45604f", "#d3ae9e"],
      ["#c0d8db", "#d3ae9e"],
      ["#dbccc5", "#d3ae9e"],
    ],
    categories: ["BAG"],
    size: ["15"],
    storage: [],
    memory: [],
    rating: 4.9,
    numReviews: 0,
    price: 99,
    discount: 30,
    countInStock: 10,
    _id: "62b761d3bf201c2428b307fb",
    name: "Smart Backpack",
    user: "62b761d3bf201c2428b307ec",
    brand: "",
    description:
      "Renewed products look and work like new. These products have been inspected and tested, which typically perform a full diagnostic test, replacement of any defective parts, and a thorough cleaning process. Packaging and accessories may be generic. ",
    reviews: [],
    __v: 0,
    createdAt: "2022-06-25T19:28:19.900Z",
    updatedAt: "2022-06-25T19:28:19.900Z",
  });
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <LayoutPage title="Categories">
      <ProductDetailsContainer>
        <DetailsContent>
          <DetailsColumn>
            <ImageDisplay src={product?.images[imageIndex]} />
            <RowGap gap="13px">
              {product?.images?.map((item, index) => (
                <SmImageBox key={item} onClick={() => handleImageIndex(index)}>
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
                <RadioColor key={item} id={item} c1={item[0]} c2={item[1]} />
              ))}
            </RowGap>
            <GetSelectOption title="Size and Weight" options={product?.size} />
            <GetSelectOption title="Chip" options={product?.chip} />
            <GetSelectOption title="Storage" options={product?.storage} />
            <GetSelectOption title="Memory" options={product?.memory} />
            <Button>Add To Cart</Button>
          </DetailsColumn>
        </DetailsContent>
      </ProductDetailsContainer>
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
