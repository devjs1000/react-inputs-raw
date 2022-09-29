import React from "react";
import { Flex } from "@chakra-ui/react";

export const Row = ({ children, ...others }: any) => {
  return (
    <Flex
      {...others}
      h={"60px"}
      w={"full"}
      alignItems={"center"}
      p={"10px"}
      justify={"space-between"}
    >
      {children}
    </Flex>
  );
};
