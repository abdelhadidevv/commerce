import { TrendingContainer, StyledBox } from "./style";
import TrendingProductItem from "./TrendingProductItem";
import { StyledLgTitle, StyledSmTitle } from "../../shared/Title";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Trending = () => {
  const { trendingProducts, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.products);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (isSuccess && trendingProducts) {
      setListData(trendingProducts);
    }
  }, [trendingProducts, isSuccess]);
  return (
    <TrendingContainer>
      <StyledSmTitle>TOP PRODUCTS</StyledSmTitle>
      <StyledLgTitle>Trending This Week</StyledLgTitle>
      <StyledBox>
        {listData &&
          listData.map((item) => (
            <TrendingProductItem key={item._id} productData={item}/>
          ))}
      </StyledBox>
    </TrendingContainer>
  );
};

export default Trending;
