import { useTrendingsMovies, usePagination } from '../hooks'

import Results from './Results'
import Loader from './Loader'

const ResultMovies = () => {
  const { page, nextPage, prevPage } = usePagination();
  const { data, error, isLoading } = useTrendingsMovies({ page })
  
  const isMaxPage =  !isLoading && (page >= data?.total_pages);
 
  return isLoading ? (
    <Loader />
  ) : (
    <Results
      data={data?.results ?? []}
      fallbackMessage="No movies availables"

      nextPage={nextPage}
      prevPage={prevPage}
      currentPage={page}
      maxPage={data?.total_pages}
      isMaxPage={isMaxPage}
    />
  );
}

export default ResultMovies