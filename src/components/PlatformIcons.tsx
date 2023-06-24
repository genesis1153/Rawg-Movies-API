import { Platform } from "../hooks/useGames";
import { FaWindows, FaApple, FaPlaystation, FaXbox } from "react-icons/fa";
import { FcLinux, FcAndroidOs } from "react-icons/fc";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FcLinux,
    android: FcAndroidOs,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
};

function PlatformIcons({ platforms }: Props) {
    return (
        <HStack>
            {platforms.map((p) => (
                <Icon as={iconMap[p.slug]} color="gray.500" key={p.id} />
            ))}
        </HStack>
    );
}

export default PlatformIcons;
