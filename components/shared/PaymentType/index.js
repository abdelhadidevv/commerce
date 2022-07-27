import {
  PaymentTypeContainer,
  InputRadio,
  Label,
  RightContainer,
} from "./style";
import Image from "next/image";

const PaymentType = () => {
  return (
    <PaymentTypeContainer>
      <InputRadio type="radio" id="credit-card" name="color" value="" defaultChecked />
      <Label htmlFor="credit-card">Credit Card</Label>
      <RightContainer>
        <Image
          width={71}
          height={42}
          objectFit="contain"
          src="/images/visa.png"
          alt=""
        />
        <Image
          width={71}
          height={42}
          objectFit="contain"
          src="/images/debit-card.png"
          alt=""
        />
        <Image
          width={71}
          height={42}
          objectFit="contain"
          src="/images/credit-card.png"
          alt=""
        />
      </RightContainer>
    </PaymentTypeContainer>
  );
};

export default PaymentType;
