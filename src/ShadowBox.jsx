import React from "react";
import { Box } from "@chakra-ui/react";

const ShadowBox = (props) => {
  return (
    <>
      <Box rounded="full" _hover={{ shadow: "md" }} {...props} />
    </>
  );
};

export default ShadowBox;
