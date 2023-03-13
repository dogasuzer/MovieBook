import {
  getTopRatedMovies1,
  getTopRatedMovies2,
  getTopRatedMovies3,
} from "../../services/util/popmovies";
import { useEffect, useState } from "react";
import "./Movies.css";
import LoadingSpinner from "./LoadingSpinner";
import MovieList from "./MovieList";

const Movies = ({ page, selectedGenre, isAfter2010 }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSet, setDataSet] = useState([]);
  const [dummy, setDummy] = useState(0);
  async function getTopRatedHandler() {
    setIsLoading(true);

    //external API does not allow to request more than 20 movie.
    try {
      const data1 = await getTopRatedMovies1();
      setDataSet((prevdata) => prevdata.concat(data1));
      const data2 = await getTopRatedMovies2();
      setDataSet((prevdata) => prevdata.concat(data2));
      const data3 = await getTopRatedMovies3();
      setDataSet((prevdata) => prevdata.concat(data3));
    } catch {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getTopRatedHandler();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-content">
        <LoadingSpinner />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="Popular-movies-list">
        {dataSet.length != 0 && (
          <MovieList
            dataSet={dataSet}
            selectedGenre={selectedGenre}
            isAfter2010={isAfter2010}
          />
        )}
      </div>
      {}
    </div>
  );
};

export default Movies;
