import axios from 'axios';

const API_KEY = '60920ccc08e6ea152e0b4910d0838423';

const popmoviesurl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const topratedurl1=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const topratedurl2=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`;
const topratedurl3=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`;
const reviewdecrypt="https://moviebook-d38d1-default-rtdb.firebaseio.com/reviews.json"
const genredecrypt=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
const baseUrl = 'https://api.themoviedb.org/3/';
export async function getPopularMovies() {
  const response = await axios.get(popmoviesurl);
  return response.data.results;
}

export async function getTopRatedMovies1() {
  const response = await axios.get(topratedurl1);
  return response.data.results;
}

export async function getTopRatedMovies2() {
  const response = await axios.get(topratedurl2);
  return response.data.results;
}

export async function getTopRatedMovies3() {
  const response = await axios.get(topratedurl3);
  return response.data.results;
}

export async function getGenreNames() {
  const response = await axios.get(genredecrypt);
  return response.data.genres;
}

export async function getReviews() {
  const response = await axios.get(reviewdecrypt);
  return response.data.genres;
}

export async function getMovieDetail(movieId) {
  const response = await axios
    .get(baseUrl + `movie/${movieId}`, {
      params: {
        api_key: API_KEY
      }
    })
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
}