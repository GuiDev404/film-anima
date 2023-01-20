import { useEffect, useState } from 'react';
import { getTopRatedMovie, getTrendingMovie, getTopRatedSeries, getTrendingSeries } from '../services'

const useHome = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 ;

  useEffect(()=> {
    setIsLoading(true)

    Promise.all([
      getTrendingMovie(),
      getTopRatedMovie(),
      getTrendingSeries(),
      getTopRatedSeries()
    ])
      .then(sections=> sections.map(section=> section.results))
      .then(setSections)
      .catch(setError)
      .finally(()=> setIsLoading(false))
  }, [])

  return {
    sections,
    isLoading,
    error,
  }
}

export default useHome