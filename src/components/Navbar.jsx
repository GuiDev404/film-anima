import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  useTheme,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import { Link as LinkRouter, NavLink } from 'react-router-dom';
import useSheetView from '../hooks/useSheetView';
import NavbarDrawer from './NavbarDrawer';

const Navbar = () => {
  const { openSheet } = useSheetView();
  const { colors } = useTheme();

  const activeLink = ({ isActive }) => ({
    color: isActive ? colors.green['200'] : colors.gray['500'],
  });

  const anchor = (
    <Heading fontSize='1.5rem' color='green.200'>
      <LinkRouter to='/'>FilmAnima</LinkRouter>
    </Heading>
  );

  const links = (
    <Box
      as='nav'
      display='flex'
      width={{ base: '100%', md: 'xs' }}
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='space-between'
      alignItems={{ base: 'flex-start', md: 'center' }}
      fontSize='lg'
    >
      <Link as={NavLink} to='/' style={activeLink}>
        Inicio
      </Link>
      <Link as={NavLink} to='/movies' style={activeLink}>
        Peliculas
      </Link>
      <Link as={NavLink} to='/series' style={activeLink}>
        Series
      </Link>
    </Box>
  );

  const lists = (
    <Button colorScheme='green' onClick={openSheet}>
      Mis Listas
    </Button>
  );

  return (
    <Container
      maxW='container.xl'
      my={7}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <NavbarDrawer>
        <DrawerHeader>{anchor}</DrawerHeader>

        <DrawerBody>
          {links}
        </DrawerBody>

        {/* <DrawerFooter justifyContent='start'>{lists}</DrawerFooter> */}
      </NavbarDrawer>

      <Box display={{ base: 'initial', md: 'none' }} zIndex={99}>
        {lists}
      </Box>

      <Box
        as='header'
        zIndex={1}
        display={{ base: 'none', md: 'flex' }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        {anchor}

        {links}

        {lists}
      </Box>
    </Container>
  );
};

export default Navbar;
