import ReviewItem from "../../components/ReviewList/ReviewItem";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../services/context/AuthContext";

const MyPage = ({ items }) => {
  const { currentUser } = useContext(AuthContext);
  const activeUser = currentUser.displayName;
  let numOfUserReviews = 0;
  let totalUserRating = 0;
  const userReviews = items.filter((item) => {
    return item.userName === activeUser;
  });

  return (
    <div className="review-list">
      {userReviews.map((review) => {
        return (
          <ReviewItem
            key={review.key}
            reviewMovieTitle={review.reviewMovieTitle}
            reviewText={review.reviewText}
            userRating={review.userRating}
            userName={review.userName}
          />
        );
      })}
    </div>
  );
};

export default MyPage;
