import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onHandleSearchGame: (searchText: string) => void;
}

const SearchInput = ({ onHandleSearchGame }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (searchRef.current)
                    onHandleSearchGame(searchRef.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={searchRef}
                    borderRadius={20}
                    placeholder="Search game..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
