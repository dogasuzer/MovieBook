import React from 'react';
import ReviewItem from './ReviewItem';
import "./ReviewList.css";

const ReviewList = ({items}) => {

  return (
    <div className='review-list'>
      {items.map((review) => (
        <ReviewItem
          key={review.key}
          reviewMovieTitle={review.reviewMovieTitle}
          reviewText={review.reviewText}
          userRating={review.userRating}
          userName={review.userName}
        />
      ))}
    </div>
  );
};

export default ReviewList;
