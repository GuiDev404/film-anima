import { Box, Button, Container, Heading, Link, useTheme } from "@chakra-ui/react";
import { Link as LinkRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  const { colors } = useTheme()

  const activeLink = ({ isActive }) => ({
    color: isActive ? colors.green["200"] : colors.gray["500"],
  });

  return (
    <Container
      maxW="container.xl"
      my={7}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        as="header"
        zIndex={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Heading fontSize="1.5rem" color="green.200">
          <LinkRouter to="/">FilmAnima</LinkRouter>
        </Heading>

        <Box
          as="nav"
          w="xs"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize="lg"
        >
          <Link as={NavLink} to="/" style={activeLink}>
            Home
          </Link>
          <Link as={NavLink} to="/movies" style={activeLink}>
            Movies
          </Link>
          <Link as={NavLink} to="/series" style={activeLink}>
            Series
          </Link>
        </Box>
        <Button colorScheme="green">Login</Button>
      </Box>
    </Container>
  );
};

export default Navbar;
