import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { getSearchMovie,  getSearchTv } from '../services';

const searchFor = {
  'movie': getSearchMovie,
  'tv': getSearchTv,
}

const useSearch = ({ keyword, page }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
  const match = useMatch('/movies/*')
  const type = match ? 'movie' : 'tv';

  useEffect(()=> {

    setIsLoading(true)

    searchFor[type]({ page, keyword })
      .then(data=> data?.results)
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

export default useSearch