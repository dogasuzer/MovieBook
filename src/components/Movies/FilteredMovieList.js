import React from "react";
import MovieView from "../Movies/MovieView";
import "./FilteredMovieList.css";

function FilteredMovieList({ filteredMovieList }) {
  return (
    <div className="filtered-movie-list">
      {filteredMovieList.map((item) => {
        return <MovieView movie={item} key={item.id} />;
      })}
    </div>
  );
}

export default FilteredMovieList;
