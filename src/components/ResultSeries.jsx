import { Heading } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

import { usePagination } from '../hooks';
import { useTrendingSeries } from '../hooks/useTrendingSeries';

import Loader from './Loader';
import Results from './Results';

const ResultSeries = () => {
  const { page, nextPage, prevPage } = usePagination();
  const { data, error, isLoading } = useTrendingSeries({ page });

  const isMaxPage = !isLoading && parseInt(page, 10) >= data?.total_pages;

  if (isLoading) return <Loader />;

  if (error) {
    if (error.statusCode === 404) return <Navigate to='/404' />;

    return <Heading size='md'> {error.message} </Heading>;
  }

  return (
    <Results
      data={data.results}
      fallbackMessage='No series availables'
      nextPage={nextPage}
      prevPage={prevPage}
      currentPage={page}
      maxPage={data?.total_pages}
      isMaxPage={isMaxPage}
    />
  );
};

export default ResultSeries;
