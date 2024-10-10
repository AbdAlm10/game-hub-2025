import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitvh from "./ColorModeSwitvh";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image w="130px" src={logo} boxSize="60px" objectFit="contain" />
      </Link>
      <SearchInput />
      <ColorModeSwitvh />
    </HStack>
  );
};

export default Navbar;
