import Movies from "../../components/Movies/Movies";
import "./MoviesPage.css";
import { useState } from "react";
import GenreDecrypt from "../../components/GenreDecrypt/GenreDecrypt";

const MoviesPage = () => {
  const [counter, setCounter] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isAfter2010, setIsAfter2010] = useState(0);

  const LoadHandler = () => {
    if (counter < 3) {
      setCounter((counter) => counter + 1);
      console.log(counter);
    } else {
      return;
    }
  };
  const selectHandler = (selectedGenreFromGenreFilter) => {
    setSelectedGenre(selectedGenreFromGenreFilter);
  };
  const moviesAfter2010Handler = () => {
    if (isAfter2010 == 0) setIsAfter2010(1);
    if (isAfter2010 == 1) setIsAfter2010(0);
  };
  return (
    <div className="movies-page">
      <div className="movie-page-genre-bar">
        <button
          className="movie-list-2010-filter"
          onClick={moviesAfter2010Handler}
        >
          {isAfter2010 == 0 ? "+Movies after 2010" : "Return to all movies ->"}
        </button>
        <div className="movie-page-genre-dec">
          <GenreDecrypt onSelect={selectHandler} />
        </div>
      </div>
      <div className="movie-page-movies">
        <Movies selectedGenre={selectedGenre} isAfter2010={isAfter2010} />
      </div>
    </div>
  );
};

export default MoviesPage;
