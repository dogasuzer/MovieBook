import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase-config";
import "./LoginPage.css";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  let username = "";
  const SignupHandler = () => {
    navigate("/signup");
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          username = user.displayName;
          console.log(username);
          // ...
        }
      );
      navigate("/");
    } catch (error) {
      setError(true);
      console.log("giris yapamadin");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc">
            Login to connect with cinephiles, criticize and share your favorite
            movies.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="bottom">
              <form onSubmit={handleLogin} className="bottomBox">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  id="email"
                  className="loginInput"
                  required
                />
                <label>Password</label>

                <input
                  type="password"
                  placeholder="19exAmplePassWord32"
                  id="password"
                  className="loginInput"
                  minLength={6}
                  required
                />
                <div className="login-page-buttons">
                  <button type="submit" className="loginButton">
                    Login
                  </button>
                  <button
                    onClick={SignupHandler}
                    className="loginRegisterButton"
                  >
                    Create a New Account
                  </button>
                </div>
                {error && <span>Something went wrong</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
