import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaFacebook, FaGoogle, FaShopify, FaSpotify } from "react-icons/fa";
// import {} from "@chakra-ui/icons/fa"

export const Social = () => {
  return (
    <div>
      <HStack spacing="24">
        <Icon as={FaFacebook} boxSize="50" />
        <Icon as={FaGoogle} boxSize="50" />
        <Icon as={FaSpotify} boxSize="50" />
        <Icon as={FaShopify} boxSize="50" />
      </HStack>
    </div>
  );
};
