import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CarouselItem from "../components/CarouselItem";
import { SEARCH, TRENDING_MOVIES, POPULAR_TV_SHOWS } from "../const/api";
import { useFetch } from "../hooks/useFetch";

const Results = () => {
  const { keyword } = useParams();

  const isMovies = location.pathname.includes("movies");

  const ALL = isMovies ? TRENDING_MOVIES : POPULAR_TV_SHOWS;

  const { data, isLoading } = useFetch({
    url: keyword ? SEARCH(keyword, isMovies ? "movie" : "tv") : ALL,
  });

  return isLoading ? (
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
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, 200px)"
      gap={5}
      justifyContent="center"
      w="100%"
    >
      {data ? (
        data.results.map((item) => (
          <CarouselItem
            key={item.id}
            urlToDetails={`${item.id}`}
            imageURL={item.poster_path}
            text={item?.title ?? item?.name ?? item?.original_name ?? ""}
          />
        ))
      ) : (
        <Text color="gray.500" fontSize="2xl">
          {" "}
          No results 😔{" "}
        </Text>
      )}
    </Box>
  );
};

export default Results;
