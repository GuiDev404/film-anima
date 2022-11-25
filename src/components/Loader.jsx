import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      h="80vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner />
    </Box>
  );
};

export default Loader;
