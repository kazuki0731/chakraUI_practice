import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Circle, Flex, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

export const Header = () => {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "16"} alignItems="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            bgClip="text"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            fontWeight="bold"
          >
            Pawan Kumar
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            GDE - Flutter, Firebase, Founder of http://google.com
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://google.com")}
          >
            Hire me!
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent" boxShadow="lg" boxSize="300px"
          src="https://avatars.githubusercontent.com/u/12619420?v=4"
        />
      </Flex>
    </Stack>
  );
};
