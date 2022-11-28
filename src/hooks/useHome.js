import { useEffect, useState } from 'react';
import { getTopRatedMovie, getTrendingMovie, getTopRatedSeries, getTrendingSeries } from '../services'
import { randomNumber } from '../utils';

const useHome = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieRandom, setRandomMovie] = useState({});

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

  useEffect(()=>{
    if (!isLoading && sections.length !== 0) {
      const [ MOVIE_TRENDING ] = sections;
      const INDEX_RANDOM = randomNumber(MOVIE_TRENDING?.length);
      const MOVIE_RANDOM = MOVIE_TRENDING[INDEX_RANDOM];
      
      setRandomMovie(MOVIE_RANDOM);
    }
  }, [isLoading])

  return {
    sections,
    isLoading,
    error,
    movieRandom
  }
}

export default useHome