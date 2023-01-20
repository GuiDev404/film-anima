import { useEffect, useState } from 'react'
import { getTrendingMovie } from '../services/getMovies';

export const useTrendingsMovies = ({ page = 1 } = {}) => {
  const [data, setData] = useState({ total_pages: 1, results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
  useEffect(()=> {
    page === 1 && setIsLoading(true)

    getTrendingMovie({ page })
      // SOLO LA PAGINA ACTUAL
      .then(data=> ({ total_pages: data.total_pages, results: data?.results }))
      // ACUMULAR LAS PAGINAS, LE FALTA EL VOLVER PARA ATRAS
      // .then(data=> setData(prevData=> ({ ...data, results: [...prevData?.results, ...data.results] })))
      .then(setData)
      .catch(setError)
      .finally(()=> page === 1 && setIsLoading(false))
  }, [page])

  return {
    data,
    isLoading,
    error
  }
}