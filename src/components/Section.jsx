import { Heading, Button, Box, Spinner } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import { useFetch } from "../hooks/useFetch";

const Section = ({ title, link, urlToFetch, children }) => {
  const { data, isLoading } = useFetch({
    url: urlToFetch,
  });

  return (
    <Box as="section" my={50} minHeight="350px" height="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading size="lg" fontWeight="bold">
          {" "}
          {title}{" "}
        </Heading>
        {Boolean(link) && (
          <Button as={Link} to={link} colorScheme="green" size="sm">
            {" "}
            Ver Mas{" "}
          </Button>
        )}
      </Box>

      {children ? children : null}

      {!children && isLoading ? (
        <Box
          h="100%"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner />
        </Box>
      ) : (
        <Carousel>
          {data?.results.map((item) => (
            <CarouselItem
              key={item.id}
              urlToDetails={`${item.id}`}
              text={item?.title ?? item?.name ?? item?.original_name ?? ""}
              imageURL={item.poster_path}
            />
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default Section;
