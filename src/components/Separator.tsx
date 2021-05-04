import { Box } from "@chakra-ui/react";

export default function Separator() {
  return (
    <Box
      w={["60px", "90px"]}
      mx="auto"
      h="2px"
      background="gray.700"
      my={["9", "20"]}
    />
  );
}