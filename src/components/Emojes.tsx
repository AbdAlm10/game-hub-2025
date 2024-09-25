import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import bullseye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emojes = ({ rating }: Props) => {
  const emojeMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptionl", boxSize: "35px" },
  };

  return <Image {...emojeMap[rating]} mt={1} />;
};

export default Emojes;
