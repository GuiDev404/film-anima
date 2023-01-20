import { useEffect, useState } from "react";
import { getTrendingMovie, getCredits } from "../services";

import { randomNumber } from "../utils";

const useMovieRandom = () => {
  const [movieRandom, setRandomMovie] = useState({
    loading: false,
    movie: {},
    error: null,
  });

  useEffect(() => {
    setRandomMovie({ ...movieRandom, loading: true });

    getTrendingMovie()
      .then((movies) => {
        const MOVIE_TRENDING = movies.results;
        const INDEX_RANDOM = randomNumber(MOVIE_TRENDING?.length);
        const MOVIE_RANDOM = MOVIE_TRENDING[INDEX_RANDOM];

        setRandomMovie((prev) => ({ ...prev, movie: MOVIE_RANDOM }));
        return getCredits({ type: "movie", id: MOVIE_RANDOM.id });
      })
      .then((movieCredits) => {
        const [director = {}] = movieCredits.crew
          .filter((c) => c.job === "Director" || c.known_for_department === 'Directing');

        setRandomMovie((prev) => ({
          error: null,
          loading: false,
          movie: { ...prev.movie, director },
        }));
      })
      .catch((error) =>
        setRandomMovie({ error: error.message, loading: false, movie: {} })
      );
  }, []);

  return movieRandom
};

export default useMovieRandom;
