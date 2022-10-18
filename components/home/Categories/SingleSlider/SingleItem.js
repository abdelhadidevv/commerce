import Image from "next/image";
import { useRouter } from "next/router";
import {
  SingleItemContainer,
  Discount,
  SliderImageBox,
  StyledColumn,
  DiscountPrice,
  Name,
  Row,
  Text,
  Price,
} from "./style";

const SingleItem = ({ itemData }) => {
  const router = useRouter();

  return (
    <SingleItemContainer>
      <Discount>{itemData.discount}</Discount>
      <SliderImageBox>
        <Image
          width={400}
          height={630}
          objectFit="contain"
          src={itemData.image}
          blurDataURL={itemData.image}
          placeholder="blur"
          loading="lazy"
          alt=""
        />
      </SliderImageBox>
      <StyledColumn>
        <Row justify="space-between">
          <Name
            lg
            fontSize="37px"
            weight="600"
            onClick={() => {
              router.push(`/product-details/${itemData._id}`);
            }}
          >
            {itemData.title}
          </Name>
          <Price>{itemData.price}</Price>
        </Row>
        <Row margin="15px 0px 0px 0px" justify="space-between" align="center">
          <Text fontSize="20px" weight="400" color="#7A7A7A">
            Brand: {itemData.brand}
          </Text>
          <DiscountPrice>{itemData.discountPrice}</DiscountPrice>
        </Row>
      </StyledColumn>
    </SingleItemContainer>
  );
};

export default SingleItem;
