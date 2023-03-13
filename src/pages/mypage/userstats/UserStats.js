import "./UserStats.css";
import { useContext } from "react";
import { AuthContext } from "../../../services/context/AuthContext";

const UserStats = ({ items }) => {
  const { currentUser } = useContext(AuthContext);
  const activeUser = currentUser.displayName;
  let numOfUserReviews = 0;
  let totalUserRating = 0;
  let averageUserRating = 0;
  const userReviews = items.filter((item) => {
    return item.userName === activeUser;
  });
  return (
    <div className="user-stats">
      {userReviews.map((review) => {
        numOfUserReviews += 1;
        totalUserRating += parseInt(review.userRating);
        averageUserRating = totalUserRating / numOfUserReviews;
      })}
      <h1>
        You are logged in as :<br></br>
        <b className="bolder">{currentUser.displayName}</b>
      </h1>
      <div className="user-stats-container">
        <h1>Number of reviews: </h1>
        <p className="user-stats-num">{numOfUserReviews}</p>
        <h1>Average Rating: </h1>
        <p className="user-stats-num">{Math.floor(averageUserRating)}</p>
      </div>
    </div>
  );
};

export default UserStats;
