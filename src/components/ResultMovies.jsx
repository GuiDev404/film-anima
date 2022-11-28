import { useTrendingsMovies } from '../hooks'
import Results from './Results'
import Loader from './Loader'

const ResultMovies = () => {
  const { data, error, isLoading } = useTrendingsMovies()

  return isLoading 
    ? <Loader />
    : <Results data={data} fallbackMessage="No movies availables"  />
}

export default ResultMovies