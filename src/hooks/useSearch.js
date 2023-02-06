import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { getSearchMovie,  getSearchTv } from '../services';

const searchFor = {
  'movie': getSearchMovie,
  'tv': getSearchTv,
}

export const useSearch = ({ keyword, page }) => {
  const [data, setData] = useState({ total_pages: 1, results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
  const match = useMatch('/movies/*')
  const type = match ? 'movie' : 'tv';

  useEffect(()=> {

    setIsLoading(true)

    searchFor[type]({ page: parseInt(page, 10), keyword })
      .then(data=> ({ total_pages: data.total_pages, results: data?.results }))
      .then(setData)
      .catch(setError)
      .finally(()=> setIsLoading(false))

  }, [type, keyword, page])

  return {
    data,
    isLoading,
    error,
    type
  }
}
