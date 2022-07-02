import { TrendingContainer, StyledBox } from "./style";
import TrendingProductItem from "./TrendingProductItem";
import { StyledLgTitle, StyledSmTitle } from "../../shared/Title";

const Trending = () => {
  const data = [
    {
      id: 1,
      title: "Samsung Galaxy S10",
      image: "/images/phone5.png",
      discount: "SALE -50%",
      discountPrice: "139.00$",
      price: "$99",
      brand: "Samsung",
    },
    {
      id: 2,
      title: "Pixel 6 Pro",
      image: "/images/phone1.png",
      discount: "SALE -90%",
      discountPrice: "500.00$",
      price: "$499",
      brand: "Google",
    },
    {
      id: 3,
      title: "Samsung Galaxy S10",
      image: "/images/phone5.png",
      discount: "SALE -50%",
      discountPrice: "139.00$",
      price: "$99",
      brand: "Samsung",
    },
    {
      id: 4,
      title: "Pixel 6 Pro",
      image: "/images/phone1.png",
      discount: "SALE -90%",
      discountPrice: "500.00$",
      price: "$499",
      brand: "Google",
    },
  ];
  return (
    <TrendingContainer>
      <StyledSmTitle>TOP PRODUCTS</StyledSmTitle>
      <StyledLgTitle>Trending This Week</StyledLgTitle>
      <StyledBox>
        <TrendingProductItem />
        <TrendingProductItem />
        <TrendingProductItem />
        <TrendingProductItem />
      </StyledBox>
    </TrendingContainer>
  );
};

export default Trending;
