import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase-config";
const SignupPage = () => {
  const LoginHandler = () => {
    navigate("/login");
  };
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName }).catch(
        (err) => console.log(err)
      );
    } catch (error) {
      setError(true);
    }
    navigate("/login");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginDesc">Sign up </span>
        <div className="registerBox">
          <div className="bottom">
            <form onSubmit={handleRegister} className="bottomBox">
              <label>Username</label>
              <input
                type="text"
                placeholder="yourusername12"
                id="displayName"
                className="registerInput"
                required
              />
              <label>Email</label>

              <input
                type="email"
                placeholder="example@example.com"
                id="email"
                className="registerInput"
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="registerInput"
                minLength={6}
                required
              />
              <div className="login-page-buttons">
                <button type="submit" className="loginButton">
                  Sign Up
                </button>
                <button onClick={LoginHandler} className="loginRegisterButton">
                  Log into Account
                </button>
              </div>
              {error && <span>Something went wrong</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
