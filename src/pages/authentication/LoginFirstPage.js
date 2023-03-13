import "./LoginFirst.css";
import loginfirst from "../../loginfirst.png";
import { useNavigate } from "react-router-dom";

const LoginFirst = () => {
  const navigate = useNavigate();

  const SignupHandler = () => {
    navigate("/signup");
  };
  const LoginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="login-first-page">
      <div className="login-first-container">
        <img src={loginfirst} alt="connect with others" />
        <h1 className="login-first-heading">
          {" "}
          You Need To Login First &#127916;{" "}
        </h1>
        <div className="login-first-buttons">
          <button className="login-button" onClick={LoginHandler}>
            Login
          </button>
          <button className="signup-button" onClick={SignupHandler}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginFirst;
