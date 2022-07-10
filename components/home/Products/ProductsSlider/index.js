import { ProductsSliderContainer } from "./style";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "42px",
        height: "85px",
        background: "#FA7400",
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/icons/arrow_slider.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "42px",
        height: "85px",
        background: "#FA7400",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/icons/arrow_slider_left.svg" alt="" />
    </div>
  );
}

const ProductsSlider = () => {
  const { featuredProducts, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.products);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (isSuccess && featuredProducts) {
      setListData(featuredProducts);
    }
  }, [featuredProducts, isSuccess]);

  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dotsClass: "dots",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ProductsSliderContainer>
      <Slider {...settings}>
        {listData &&
          listData.map((item) => (
            <ProductItem key={item._id} productData={item} />
          ))}
        <style jsx>{``}</style>
      </Slider>
    </ProductsSliderContainer>
  );
};

export default ProductsSlider;
