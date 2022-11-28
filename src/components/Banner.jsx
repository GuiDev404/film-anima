import { Box } from "@chakra-ui/react";
import { BEFORE_HEADER } from "../const";

const Banner = ({ backdrop, children }) => {
  const background = backdrop
    ? `url(https://image.tmdb.org/t/p/w1280${backdrop}) no-repeat center/cover`
    : "transparent no-repeat center/cover";

  return (
    <Box as="header" _before={{ ...BEFORE_HEADER, background }} height="100vh">
      <Box
        position="absolute"
        left="0"
        w="100%"
        top="0"
        boxShadow="21px 0 50px 45px #0d0d0d"
        height={0}
      ></Box>
      <Box
        top="89vh"
        left="0"
        w="100%"
        boxShadow="21px 62px 80px 100px #0d0d0d"
        position="absolute"
      ></Box>
      <Box
        top="0"
        left="0"
        w="0"
        h="89vh"
        boxShadow="21px 62px 90px 90px #0d0d0d"
        position="absolute"
      ></Box>
      <Box
        top="0"
        right="0"
        w="0"
        h="89vh"
        boxShadow="21px 62px 90px 90px #0d0d0d"
        position="absolute"
      ></Box>

      {children}
    </Box>
  );
};

export default Banner;
