import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitvh from "./ColorModeSwitvh";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitvh />
    </HStack>
  );
};

export default Navbar;
