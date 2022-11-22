import { Box, Button, Heading, Link, Container } from "@chakra-ui/react";
import { NavLink, Link as LinkRouter } from "react-router-dom";
import theme from "../const/theme";

const activeLink = ({ isActive }) => ({
  color: isActive ? theme.colors.green["200"] : theme.colors.gray["500"],
});

const Navbar = () => {
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
        <LinkRouter to="/">
          <Heading fontSize="1.5rem" color="green.200">
            FilmAnima
          </Heading>
        </LinkRouter>

        <Box
          as="nav"
          w="xs"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize='lg'
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
