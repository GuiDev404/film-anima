import { Box, Text } from "@chakra-ui/react";
import { useMatch } from "react-router-dom";
import Item from "./Item";

const Results = ({ data, fallbackMessage }) => {
  const isMoviePage = useMatch('/movies/*')
  const basePathname = isMoviePage ? isMoviePage.pathnameBase : '/series';

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
  );
};

export default Results;
