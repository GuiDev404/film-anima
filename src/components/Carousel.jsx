import { Box } from "@chakra-ui/react";

const Carousel = ({ children }) => {
  return (
    <Box
      w="100%"
      display="flex"
      gap={5}
      mt={5}
      mb={50}
      overflowX="auto"
      height="100%"
    >
      {children}
    </Box>
  );
};

export default Carousel;
