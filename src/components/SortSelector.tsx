import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    sortOrder: string | null;
    onSelectSortOrder: (order: string) => void;
}

const sortBy = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
];

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const display = sortBy.find((order) => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {display?.label || "Sort by: Relevance"}
            </MenuButton>
            <MenuList>
                {sortBy.map((s) => (
                    <MenuItem
                        key={s.value}
                        onClick={() => onSelectSortOrder(s.value)}
                    >
                        {s.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
