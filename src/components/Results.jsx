import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { POPULAR_TV_SHOWS, SEARCH, TRENDING_MOVIES } from "../const/api";
import { useFetch } from "../hooks/useFetch";
import { typeForApi, typeForApp } from "../utils";
import Item from "./Item";
import Loader from "./Loader";

const Results = () => {
  const { keyword } = useParams();
  const TYPE_FOR_APP = typeForApp();
  const ALL_OF_TYPE =
    TYPE_FOR_APP === "movies" ? TRENDING_MOVIES : POPULAR_TV_SHOWS;

  const TYPE_FOR_API = typeForApi();

  const { data, isLoading } = useFetch({
    url: keyword ? SEARCH(keyword, TYPE_FOR_API) : ALL_OF_TYPE,
  });

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {data?.results?.length === 0 && (
        <Text
          color="gray.500"
          fontSize="md"
          textTransform="uppercase"
          letterSpacing={1}
          textAlign="center"
        >
          No results for{" "}
          <Text as="strong" color="whiteAlpha.700">
            {" "}
            {keyword}{" "}
          </Text>
        </Text>
      )}

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, 200px)"
        gap={5}
        justifyContent="center"
        w="100%"
      >
        {data &&
          data.results.map((item) => (
            <Item
              key={item.id}
              urlToDetails={`/${TYPE_FOR_APP}/${item.id}`}
              imageURL={item.poster_path}
              text={item?.title ?? item?.name ?? item?.original_name ?? ""}
            />
          ))}
      </Box>
    </>
  );
};

export default Results;
