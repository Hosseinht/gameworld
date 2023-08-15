import useGames from "../hooks/useGames";
import useData from "../hooks/useData";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const { data } = useData("games/ordering");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order
      </MenuButton>
      <MenuList>
        <MenuItem>Order</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
