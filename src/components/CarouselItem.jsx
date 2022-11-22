import { Box, Text, VStack, Image, Link } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import noPoster from '../assets/no-poster.png'

const CarouselItem = ({ text, imageURL, urlToDetails }) => {
  return (
    <VStack height="100%" alignItems="start"
    _hover={{ '& img': { borderColor: "green.400 !important" } }}
    >
      <Link
        as={LinkRouter}
        to={urlToDetails}
        transition='none'
      >
        <Image
          border="3px solid transparent"
          src={imageURL ? `https://image.tmdb.org/t/p/w342${imageURL}` : noPoster}
          alt={text}
          bg="gray.800"
          rounded="md"
          height="300px"
          maxWidth="210px"
          loading="lazy"
        />
        <Text py={2}>{text}</Text>
      </Link>
    </VStack>
  );
};

export default CarouselItem;
