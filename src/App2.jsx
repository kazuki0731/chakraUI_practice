import { VStack, Flex, Heading, IconButton } from "@chakra-ui/react";
import { useColorMode, Spacer } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import React from "react";
import { Header } from "./Header";
import { Social } from "./Social";
import { Profile } from "./Profile";

export const App2 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  console.log(colorMode + "!!")
  return (
    <VStack p={5}>
      <Flex w="100%" alignItems="center">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          imthepk
        </Heading>
        <Spacer />
        <IconButton icon={<FaInstagram />} isRound={true} />
        <IconButton ml={2} icon={<FaGithub />} isRound={true} />
        <IconButton ml={2} icon={<FaLinkedin />} isRound={true} />
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
};
