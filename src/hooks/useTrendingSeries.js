import { useEffect, useState } from 'react'
import { getTrendingSeries } from '../services/getSeries';

export const useTrendingSeries = ({ page = 1 } = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
  useEffect(()=> {
    setIsLoading(true)

    getTrendingSeries({ page })
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