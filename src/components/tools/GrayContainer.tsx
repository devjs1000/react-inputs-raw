import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GrayContainer = ({ children }: Props) => {
  return (
    <Box p={4} bg="gray.100" h="full">
      {children}
    </Box>
  );
};

interface Props {
  children: ReactNode;
}

export default GrayContainer;
