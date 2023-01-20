import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import Loader from "./Loader";
import Results from "./Results";

import { usePagination, useSearch } from "../hooks";
import { useEffect } from "react";

const ResultsSearch = () => {
  const { keyword } = useParams();
  const { page, nextPage, prevPage, resetPage } = usePagination();
  const { data, error, isLoading } = useSearch({ keyword, page });
  
  useEffect(()=> {
    resetPage()
  }, [keyword])
  
  const isMaxPage =  !isLoading && (page >= data?.total_pages);
 
  return isLoading ? (
    <Loader />
  ) : (
    <Results
      data={data?.results ?? []}
      fallbackMessage={
        <>
          No results for
          <Text as="strong" color="whiteAlpha.700"> {keyword} </Text>
        </>
      }
      nextPage={nextPage}
      prevPage={prevPage}
      currentPage={page}
      maxPage={data?.total_pages}
      isMaxPage={isMaxPage}
    />
  );
};

export default ResultsSearch;
