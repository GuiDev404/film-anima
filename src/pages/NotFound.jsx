import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

const NotFound = () => {
  return (
    <Box minH="80vh" display="flex" justifyContent="center" alignItems="center">
      <Box>
        <Heading as="h1" size="3xl" color="green.300">
          Not Found
        </Heading>
        <Text color="gray.400" fontSize="lg">
          Lo sentimos la pagina no existe.{" "}
          <Link as={LinkRouter} fontWeight="normal" to="/" color="green.200">
            Volver al inicio{" "}
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default NotFound;
