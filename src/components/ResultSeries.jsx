import { useTrendingSeries } from '../hooks/useTrendingSeries'
import Loader from './Loader'
import Results from './Results'

const ResultSeries = () => {
  const { data, error, isLoading } = useTrendingSeries()

  return isLoading 
    ? <Loader />
    : <Results data={data} fallbackMessage="No series availables"  />
}

export default ResultSeries