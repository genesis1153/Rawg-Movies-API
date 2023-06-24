import meh from "../assets/meh.png";
import thumbsUp from "../assets/thumbsup.png";
import bullsEye from "../assets/bullseye.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
    rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
};

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    return <Image boxSize="25px" {...emojiMap[rating]} />;
};

export default Emoji;
