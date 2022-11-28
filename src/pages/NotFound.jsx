import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex maxW='container.md' mx='auto' minH="95vh" mt='-10' justifyContent="center" alignItems="center">
      <Stack spacing={4} direction="column" alignItems="center">
        <Heading ml="-1" color='green.300' as="h1" fontWeight="800" fontSize="9xl">
          Oops!
        </Heading>
        <Heading
          as="h2"
          color="gray.600"
          fontSize="3xl"
          textTransform="uppercase"
        >
          404 - page not found
        </Heading>
        <Text textAlign='center' color="gray.600">
          La pagina que intenta buscar no esta disponible, porque fue eliminada o hubo un error de tipeo en la URL, controle esta ultima accion. Si no es asi lo sentimos puede volver al inicio haciendo click en el siguiente boton.
        </Text>
        <Button
          as={Link} to='/' 
          textTransform="uppercase"
          fontSize="sm"
          w='fit-content'
          _hover={{ bg: 'green.200', color: 'gray.900' }}
          _active={{ bg: 'green.300', color: 'black' }}
        >
          go to homepage
        </Button>
      </Stack>
    </Flex>
  );
};

export default NotFound;