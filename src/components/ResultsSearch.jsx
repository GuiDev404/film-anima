import { Navigate, useParams } from "react-router-dom";
import { Heading, Text } from "@chakra-ui/react";

import Loader from "./Loader";
import Results from "./Results";

import { usePagination, useSearch } from "../hooks";
// import { useEffect } from "react";

const ResultsSearch = () => {
  const { keyword } = useParams();
  const { page, nextPage, prevPage, resetPage } = usePagination();
  const { data, error, isLoading } = useSearch({ keyword, page });
  
  // useEffect(()=> {
  //   resetPage()
  // }, [keyword])
  
  const isMaxPage =  !isLoading && (parseInt(page, 10) >= data?.total_pages);
 
  if (isLoading) return <Loader />;

  if (error) {
    if (error.statusCode === 404) return <Navigate to='/404' />;

    return <Heading size='md'> {error.message} </Heading>;
  }

  return (
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
