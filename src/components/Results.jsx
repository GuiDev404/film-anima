import { Box, Button, ButtonGroup, Icon, IconButton, Text } from "@chakra-ui/react";
import { useMatch } from "react-router-dom";
import Item from "./Item";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Results = ({ data, fallbackMessage, nextPage, prevPage, isMaxPage, maxPage, currentPage } = {}) => {
  const isMoviePage = useMatch("/movies/*");
  const basePathname = isMoviePage ? isMoviePage.pathnameBase : "/series";

  return data?.length === 0 ? (
    <Text
      color="gray.500"
      fontSize="md"
      textTransform="uppercase"
      letterSpacing={1}
      textAlign="center"
    >
      {fallbackMessage}
    </Text>
  ) : (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, 200px)"
        gap={5}
        justifyContent="center"
        w="100%"
      >
        {data.map((item) => (
          <Item
            key={item.id}
            urlToDetails={`${basePathname}/${item.id}`}
            imageURL={item.poster_path}
            text={item?.title ?? item?.name ?? item?.original_name ?? ""}
          />
        ))}
      </Box>

      <Box my={4} textAlign="center" w="100%">

        <ButtonGroup size="md" colorScheme="green" isAttached variant="outline">
          <IconButton
            aria-label="Prev page"
            icon={<Icon sx={{ '& > polyline': { stroke: '#98F0B1' } }} as={GrFormPrevious} />}
            disabled={currentPage <= 1}
            onClick={prevPage}
          />
          <Button fontSize=".9rem"> PAGES {currentPage} OF {maxPage ?? 10} </Button>
          <IconButton
            aria-label="Next page"
            disabled={isMaxPage}
            onClick={nextPage}
            icon={<Icon sx={{ '& > polyline': { stroke: '#98F0B1' } }} as={GrFormNext} />}
          />
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Results;
