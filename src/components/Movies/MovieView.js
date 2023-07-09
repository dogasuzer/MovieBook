import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './MovieView.css';

const MovieView = ({ movie }) => {
  const photoUrlPath = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  const urlEnd = movie.backdrop_path;
  const movieId = movie.id;
  const tenToPercent = number => {
    return number * 10;
  };
  return (
    ///        <Link to={`/${title}/detail`}  className="single-movie">

    <Link to={{ pathname: `/${movieId}/detail` }} className="single-movie">
      <div className="movie-view-item">
        <div
          style={
            movie.vote_average > 7
              ? { borderColor: 'rgb(91, 221, 70)' }
              : { borderColor: 'rgb(255, 235, 52)' }
          }
          className="vote"
        >
          %{tenToPercent(movie.vote_average)}
        </div>
        <div className="poster-img">
          <img src={photoUrlPath + urlEnd} alt="movie" />
        </div>
      </div>
      <div className="movie-title">
        <p>{movie.title}</p>
      </div>
    </Link>
  );
};

export default MovieView;
