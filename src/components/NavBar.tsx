import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/diamond.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onHandleSearchGame: (searchText: string) => void;
}

function NavBar({ onHandleSearchGame }: Props) {
    return (
        <HStack justifyContent="space-between" p="15px">
            <Image src={logo} boxSize="42px" marginRight={{ lg: "50px" }} />
            <SearchInput onHandleSearchGame={onHandleSearchGame} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
