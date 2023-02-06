import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { MdMenu } from 'react-icons/md';

function NavbarDrawer({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        zIndex={10}
        display={{ base: 'initial', md: 'none' }}
        onClick={onOpen}
        ref={btnRef}
        colorScheme='green'
        aria-label='Menu'
        size='md'
        alignSelf='end'
        icon={<Icon as={MdMenu} fontSize='1.3rem' />}
      />

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        display={{ base: 'initial', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {children}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarDrawer;
