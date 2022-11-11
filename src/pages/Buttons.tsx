import { Box } from "@chakra-ui/react";
import React from "react";
import FloatingButton from "../components/Buttons/FloatingButton";
import GrayContainer from "../components/tools/GrayContainer";

const Buttons = () => {
  const print = {
    bg: "https://www.apple.com/v/mac-mini/q/images/overview/macos_bg__c6uv4hpfwiie_large_2x.jpg",
  };
  return (
    <GrayContainer>
      <FloatingButton title={"Floating Button"} />
    </GrayContainer>
  );
};

export default Buttons;
