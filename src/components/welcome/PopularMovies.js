import { getPopularMovies } from "../../services/util/popmovies";
import { useEffect, useState } from "react";
import MovieView from "../Movies/MovieView";
import "./PopularMovies.css";
const PopularMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popdataSet, setPopDataSet] = useState([]);

  async function getPopularMoviesHandler() {
    setIsLoading(true);

    try {
      const data = await getPopularMovies();
      setPopDataSet(data);
    } catch {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getPopularMoviesHandler();
  }, []);

  return (
    <div className="Popular-movies-list">
      <h2 className="Popular-movies-heading">Trending Now 🌎</h2>

      <div className="pop-movies">
        {popdataSet.map((data) => (
          <MovieView movie={data} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
