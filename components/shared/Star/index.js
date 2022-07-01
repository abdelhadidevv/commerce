import { StarBox, StarContainer } from "./style";
import Image from "next/image";

const StarItem = ({ active }) => {
  return (
    <>
      {active ? (
        <Image width={21} height={21} src="/images/icons/star.svg" alt="" />
      ) : (
        <Image
          width={21}
          height={21}
          src="/images/icons/star-gray.svg"
          alt=""
        />
      )}
    </>
  );
};

const Star = ({ rating }) => {
  const ActiveStars = () => {
    if (rating >= 5) {
      return (
        <>
          <StarItem active />
          <StarItem active />
          <StarItem active />
          <StarItem active />
          <StarItem active />
        </>
      );
    } else if (rating >= 4) {
      return (
        <>
          <StarItem active />
          <StarItem active />
          <StarItem active />
          <StarItem active />
          <StarItem />
        </>
      );
    } else if (rating >= 3) {
      return (
        <>
          <StarItem active />
          <StarItem active />
          <StarItem active />
          <StarItem />
          <StarItem />
        </>
      );
    } else if (rating >= 2) {
      return (
        <>
          <StarItem active />
          <StarItem active />
          <StarItem />
          <StarItem />
          <StarItem />
        </>
      );
    } else if (rating >= 1) {
      return (
        <>
          <StarItem active />
          <StarItem />
          <StarItem />
          <StarItem />
          <StarItem />
        </>
      );
    } else {
      return (
        <>
          <StarItem />
          <StarItem />
          <StarItem />
          <StarItem />
          <StarItem />
        </>
      );
    }
  };
  return (
    <StarContainer>
      <StarBox>
        <ActiveStars />
      </StarBox>
      <span>({rating})</span>
    </StarContainer>
  );
};

export default Star;
