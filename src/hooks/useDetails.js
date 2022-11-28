import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { getCredits, getDetail, getSimilar, getTrailers } from '../services/getDetails'

const useDetails = ({ id }) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const match = useMatch('/movies/:id')
  const type = match ? 'movie' : 'tv';

  useEffect(()=> {
    setIsLoading(true)
    const props = { id, type }

    Promise.all([
      getDetail(props),
      getCredits(props),
      getTrailers(props),
      getSimilar(props)
    ])
      .then(setDetails)
      .catch(setError)
      .finally(()=> setIsLoading(false))
  }, [id, type])

  return {
    details,
    isLoading,
    error,
    type
  }
}

export default useDetails