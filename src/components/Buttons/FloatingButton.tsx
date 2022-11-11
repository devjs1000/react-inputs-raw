import { Button } from "@chakra-ui/react";

const FloatingButton = ({ title }: Props) => {
  return (
    <Button
      bg={"white"}
      color={"gray.600"}
      boxShadow={"lg"}
      border={"1px solid white"}
      _hover={{
        bg: "rgba(250, 250, 250)",
        color: "gray.700",
      }}
      _focus={{
        bg: "rgba(240, 240, 240)",
        color: "gray.700",
      }}
      backdropFilter={"blur(100px)"}
    >
      {title}
    </Button>
  );
};

interface Props {
  title: any;
}

export default FloatingButton;
