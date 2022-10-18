import { SingleSliderContainer } from "./style";
import SingleItem from "./SingleItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

var settings = {
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "button__bar",
};

const SingleSlider = () => {
  const { featuredCategories, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (isSuccess && featuredCategories) {
      setListData(
        featuredCategories[0]?.images?.map((item) => {
          return {
            _id: featuredCategories[0]._id,
            title: featuredCategories[0].name,
            image: item,
            discount: "SALE -50%",
            discountPrice: "139.00$",
            price: "$" + featuredCategories[0].price,
            brand: "Samsung",
          };
        })
      );
    }
  }, [featuredCategories, isSuccess]);

  return (
    <SingleSliderContainer> 
      <Slider {...settings}>
        {listData?.map((item) => (
          <SingleItem itemData={item} key={Math.random() + "-" + item.image} />
        ))}
      </Slider>
    </SingleSliderContainer>
  );
};

export default SingleSlider;
