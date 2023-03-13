import React, { useEffect, useState } from "react";
import FilteredMovieList from "./FilteredMovieList";
import NoMoviesFound from "./NoMoviesFound";

function MovieList({ dataSet, isAfter2010, selectedGenre }) {
  console.log("hey");

  const tempDate = (data) => {
    return new Date(data.release_date);
  };
  // scenario: genre is NOT selected, is NOT after 2010
  let filteredResult = dataSet;
  // scenario: genre is selected, is NOT after 2010
  if (selectedGenre !== null && isAfter2010 == 0 && dataSet.length > 0) {
    filteredResult = filteredResult.filter((item) => {
      return item.genre_ids.includes(selectedGenre.value);
    });
  }
  // scenario: genre is NOT selected, is after 2010
  if (selectedGenre == null && isAfter2010 == 1 && dataSet.length > 0) {
    filteredResult = filteredResult.filter((item) => {
      return tempDate(item).getFullYear() > 2010;
    });
  }
  // scenario: genre is selected, is after 2010
  if (selectedGenre !== null && isAfter2010 == 1 && dataSet.length > 0) {
    let filteredResult1 = filteredResult.filter((item) => {
      return tempDate(item).getFullYear() > 2010;
    });
    filteredResult = filteredResult1.filter((item) => {
      return item.genre_ids.includes(selectedGenre.value);
    });
  }

  return (
    <div>
      <FilteredMovieList filteredMovieList={filteredResult} />
      {filteredResult.length < 1 ? <NoMoviesFound /> : null}
    </div>
  );
}

export default MovieList;
