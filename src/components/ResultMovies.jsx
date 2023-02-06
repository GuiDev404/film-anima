import { Navigate } from 'react-router-dom';
import { useTrendingsMovies, usePagination } from '../hooks';

import Results from './Results';
import Loader from './Loader';
import { Heading } from '@chakra-ui/react';

const ResultMovies = () => {
  const { page, nextPage, prevPage } = usePagination();
  const { data, error, isLoading } = useTrendingsMovies({ page });

  const isMaxPage = !isLoading && Number(page) >= data?.total_pages;

  if (isLoading) return <Loader />;

  if (error) {
    if (error.statusCode === 404) return <Navigate to='/404' />;
    return <Heading size='md'> {error.message} </Heading>;
  }

  return (
    <Results
      data={data.results}
      fallbackMessage='No hay peliculas disponibles'
      nextPage={nextPage}
      prevPage={prevPage}
      currentPage={page}
      maxPage={data?.total_pages}
      isMaxPage={isMaxPage}
    />
  );
};

export default ResultMovies;
