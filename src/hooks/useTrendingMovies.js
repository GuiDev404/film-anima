import { useEffect, useState } from 'react'
import { getTrendingMovie } from '../services/getMovies';

export const useTrendingsMovies = ({ page = 1 } = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
  useEffect(()=> {
    setIsLoading(true)

    getTrendingMovie({ page })
      .then(data=> data?.results)
      .then(setData)
      .catch(setError)
      .finally(()=> setIsLoading(false))
  }, [page])

  return {
    data,
    isLoading,
    error
  }
}