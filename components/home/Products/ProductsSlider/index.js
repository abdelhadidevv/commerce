import { ProductsSliderContainer } from "./style";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <>
      <ProductsSliderContainer>
        <Slider {...settings}>
          {data.map((item) => (
            <ProductItem key={Math.random()} />
          ))}
          <style jsx>{``}</style>
        </Slider>
      </ProductsSliderContainer>
    </>
  );
};

export default ProductsSlider;
