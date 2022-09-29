import React from "react";
import { Text } from "@chakra-ui/react";

export const MiniHeading = ({ children, ...others }: any) => {
  return (
    <Text ml={5} color={"white"} {...others}>
      {children}
    </Text>
  );
};
