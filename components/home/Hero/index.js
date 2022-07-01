import {
  HeroContainer,
  Title,
  SubTitle,
  BtnStartShopping,
  BtnNext,
  SpaceBetweenBox,
} from "./style";
import Image from "next/image";

const Hero = () => {
  return (
    <HeroContainer>
      <Title>PlayStation 5</Title>
      <SubTitle>
        lightning-fast download speed with super-fast ssd storage
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
