import Sheet from 'react-modal-sheet';
import { Box, Heading } from '@chakra-ui/react';
import useSheetView from '../hooks/useSheetView';
import useSheetList from '../hooks/useSheetList';
import Section from './Section';
import { useTheme } from '@emotion/react';

function WatchSheet() {
  const { isOpen, closeSheet } = useSheetView()
  const { state } = useSheetList()
  const theme = useTheme();

  return (
    <Sheet isOpen={isOpen} onClose={closeSheet}  >
      <Sheet.Container style={{ backgroundColor: theme.colors.gray[800] }}>
        <Sheet.Header />
        <Sheet.Content >
          <Box px={5} >
            <Heading fontSize='4xl' mb={2}  >
              Mis listas
            </Heading>


            <Section
              title='Vistas'
              section={state.watches}
              size='sm'
            />
            
            <Section
              title='Ver mas tarde'
              section={state.watchlist}
              size='sm'
            />
        </Box>
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
}

export default WatchSheet