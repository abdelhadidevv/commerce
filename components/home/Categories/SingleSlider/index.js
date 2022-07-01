import { SingleSliderContainer } from "./style";
import SingleItem from "./SingleItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dots from "./dots.module.css";

var settings = {
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: dots.button__bar,
};

const SingleSlider = ({ dataItems }) => {
  const data = dataItems
    ? [
        ...dataItems.images.map((item) => {
          return {
            id: dataItems._id,
            title: dataItems.name,
            image: item,
            discount: "SALE -50%",
            discountPrice: "139.00$",
            price: "$" + dataItems.price,
            brand: "Samsung",
          };
        }),
      ]
    : [
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
    <SingleSliderContainer>
      <Slider {...settings}>
        {data.map((item) => (
          <SingleItem itemData={item} key={Math.random()} />
        ))}
      </Slider>
    </SingleSliderContainer>
  );
};

export default SingleSlider;
