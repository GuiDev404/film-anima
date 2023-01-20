import { usePagination } from '../hooks';
import { useTrendingSeries } from '../hooks/useTrendingSeries'
import Loader from './Loader'
import Results from './Results'

const ResultSeries = () => {
  const { page, nextPage, prevPage } = usePagination();
  const { data, error, isLoading } = useTrendingSeries({ page })

  const isMaxPage =  !isLoading && (page >= data?.total_pages);
 
  return isLoading 
    ? <Loader />
    : <Results 
      data={data?.results}
      fallbackMessage="No series availables"
      nextPage={nextPage}
      prevPage={prevPage}
      currentPage={page}
      maxPage={data?.total_pages}
      isMaxPage={isMaxPage}
    />
}

export default ResultSeries