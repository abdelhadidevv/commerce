import {
  HeroContainer,
  Title,
  SubTitle,
  BtnStartShopping,
  BtnNext,
  SpaceBetweenBox,
} from "./style";
import Image from "next/image";
import { useSelector } from "react-redux";

const Hero = () => {
  const { offers, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  return (
    <HeroContainer img={offers && offers[0]?.imageBanner}>
      <Title>{offers ? offers[0]?.name : "PlayStation 5"}</Title>
      <SubTitle>
        {offers
          ? offers[0]?.description
          : "lightning-fast download speed with super-fast ssd storage"}
      </SubTitle>
      <SpaceBetweenBox>
        <BtnStartShopping>
          Start Shopping
          <Image width={21} height={21} src="/images/icons/arrow.svg" alt="" />
        </BtnStartShopping>
        <BtnNext>
          <Image
            width={20}
            height={11}
            src="/images/icons/arrow-down.svg"
            alt=""
          />
        </BtnNext>
      </SpaceBetweenBox>
    </HeroContainer>
  );
};

export default Hero;
