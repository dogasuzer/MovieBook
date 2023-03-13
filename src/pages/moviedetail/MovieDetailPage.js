import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MovieDetailPage.css";
import { getMovieDetail } from "../../services/util/popmovies";
const MovieDetail = (props) => {
  const { movieId } = useParams();
  let dummy = movieId;
  const photoUrlPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
  const [movieDetail, setMovieDetail] = useState([]);

  async function getMovieDetailHandler(dummy) {
    const response = await getMovieDetail(dummy);
    setMovieDetail(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getMovieDetailHandler(dummy);
  }, []);

  return (
    <div className="movie-detail">
      <div className="movie-detail-left-div">
        <img src={photoUrlPath + movieDetail.backdrop_path} alt="movie" />
      </div>
      <div className="movie-detail-right-div">
        <h1 className="movie-detail-title">{movieDetail.title}</h1>
        <h1 className="movie-detail-release">{movieDetail.release_date}</h1>
        <h1 className="movie-detail-vote">
          Vote: {Math.floor(movieDetail.vote_average)}/10
        </h1>
        <h2 className="movie-detail-overview">{movieDetail.overview}</h2>
      </div>
    </div>
  );
};
export default MovieDetail;
