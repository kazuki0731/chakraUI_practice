import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const Chakra = ({ children }) => {
  return (
    <ChakraProvider resetCSS={false}>
      {children}
    </ChakraProvider>
  );
};

export default Chakra;
