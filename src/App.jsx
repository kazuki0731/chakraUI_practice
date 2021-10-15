import {
  Box,
  chakra,
  HStack,
  Flex,
  Spacer,
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import React from "react";
import { App2 } from "./App2";
import { App3 } from "./App3";
import Chakra from "./Chakra";
import Icon from "./Image/image.png";

const App = () => {
  const Canvas = chakra("canvas");
  return (
    <Chakra>
      <ColorModeScript initialColorMode="dark" />
      <App2 />
      {/* <Image src={Icon} alt="スクショ" /> */}
      {/* <App3 /> */}
    </Chakra>
  );
};
export default App;
