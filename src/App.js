import classes from './App.css';
import Poster from './components/welcome/Poster';
import PopularMovies from './components/welcome/PopularMovies';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  useNavigate
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import NewReview from './components/NewReview/NewReview';
import ReviewList from './components/ReviewList/ReviewList';
import MyPage from './pages/mypage/MyPage';
import UserStats from './pages/mypage/userstats/UserStats';
import MovieDetail from './pages/moviedetail/MovieDetailPage';
import MoviesPage from './pages/movies/MoviesPage';
import LoginPage from './pages/authentication/LoginPage';
import SignupPage from './pages/authentication/SignupPage';
import { auth, db } from './services/firebase-config';
import { query, collection, onSnapshot, addDoc } from 'firebase/firestore';
import { React, useContext } from 'react';
import { AuthContext } from './services/context/AuthContext';
import { signOut } from 'firebase/auth';
import LoginFirstPage from './pages/authentication/LoginFirstPage';
import { useEffect, useState } from 'react';

function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    if (auth.currentUser == null) {
      return <Navigate to="/loginfirst" />;
    }
    console.log(currentUser);
    return children;
  };

  const [userReviews, setUserReviews] = useState();
  const navigate = useNavigate();

  const NewReviewHandler = async newReview => {
    try {
      const docRef = await addDoc(collection(db, 'review'), {
        reviewMovieTitle: newReview.reviewMovieTitle,
        reviewText: newReview.reviewText,
        userName: newReview.userName,
        userRating: newReview.userRating
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  useEffect(() => {
    const reviewCollectionRef = query(collection(db, 'review'));
    const getUserReviews = onSnapshot(reviewCollectionRef, querySnapshot => {
      let reviewArr = [];
      querySnapshot.forEach(doc => {
        reviewArr.push({ ...doc.data(), id: doc.id });
      });
      setUserReviews(reviewArr);
    });
    return () => getUserReviews();
  }, []);

  function logout() {
    return signOut(auth);
  }

  const authenticationHandler = () => {
    console.log(auth.currentUser);
    if (auth.currentUser == null) {
      navigate('/login');
    }
    if (auth.currentUser !== null) {
      logout();
      console.log('I log out yeyyyyyy!!!!!!!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/*" activeClassName={classes} className="App-logo">
          MOVIE<b className="bolder-logo">BOOK</b>
        </Link>
        <div className="App-nav">
          <Link to="/movies" className="App-nav-movies">
            Movies
          </Link>
          <Link to="/posts" className="App-nav-posts">
            Posts
          </Link>

          <Link to="/mypage" className="App-nav-mypage">
            My Page
          </Link>
        </div>

        <button
          className="Login-widget"
          style={{
            backgroundColor: auth.currentUser !== null ? '#ecc3c3' : '#d6745e',
            color: auth.currentUser !== null ? '#811b10' : '#811b10'
          }}
          onClick={authenticationHandler}
        >
          {auth.currentUser !== null ? 'Logout' : 'Login'}
        </button>
      </header>

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="loginFirst" element={<LoginFirstPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route
          path="*"
          element={
            <div>
              <Poster />
              <PopularMovies />
            </div>
          }
        />
        <Route
          path="mypage"
          element={
            <div>
              <AuthRoute>
                <UserStats items={userReviews} />
                <NewReview onReviewSubmit={NewReviewHandler} />
                <MyPage items={userReviews} />
              </AuthRoute>
            </div>
          }
        />
        <Route path="movies" element={<MoviesPage />} />
        <Route
          path="/posts"
          element={
            <div className="posts-page">
              <NewReview onReviewSubmit={NewReviewHandler} />
              <ReviewList items={userReviews} />
            </div>
          }
        />

        <Route path="/:movieId/detail" element={<MovieDetail />} />
      </Routes>

      <footer className="footer">
        <div className="footer-upper-part">
          <div className="About">
            <h1>ABOUT</h1>
            <p>
              {' '}
              This Website is made by Doga Suzer Y. &#10084; <br></br> This
              project is a showcase for my knowledge of : REACT, JavaScript,
              Working with an API, Connecting Firebase Database, Using
              Authentication, Some hooks such as: useContext, useEffect,
              useNavigate, useState, Deployment, CRUD Operations for Backend,
              CSS, HTML and lastly my motivation to create and learn.
            </p>
          </div>
          <div className="Contact">
            <h1>CONTACT</h1>
            <ul className="Contact-list">
              <li>
                Learn more about me on {'    '}
                <a href="https://www.linkedin.com/in/helin-doga-suzer-884029217/">
                  Linkedin{' '}
                </a>{' '}
              </li>
              <li>Learn more about me on my website</li>
              <li>Visit my Github page</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2023 Copyright: Helin Doga Süzer Yilmaz
        </div>
      </footer>
    </div>
  );
}

export default App;
