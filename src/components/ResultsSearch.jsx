import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import Loader from "./Loader";
import Results from "./Results";

import useSearch from "../hooks/useSearch";

const ResultsSearch = () => {
  const { keyword } = useParams();
  const { data, error, isLoading } = useSearch({ keyword });

  return isLoading ? (
    <Loader />
  ) : (
    <Results
      data={data}
      fallbackMessage={
        <>
          No results for{" "}
          <Text as="strong" color="whiteAlpha.700">
            {keyword}
          </Text>
        </>
      }
    />
  );
};

export default ResultsSearch;
