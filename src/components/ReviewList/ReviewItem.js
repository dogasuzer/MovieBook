import React from 'react';
import "./ReviewItem.css";

const ReviewItem = (props) => {
  return (
      <div className='review-item'>
        <div className='review-item-reviewMovieTitle'>
          <h1 className="review-props">Movie Title</h1>
          <h2 className='review-props-title-value'>{props.reviewMovieTitle}</h2>
        </div>
        <div className='review-item-reviewText'>
          <h1 className="review-props" >Review</h1>
          <h3 className='review-props-review-value'>{props.reviewText}</h3>
          <h2>{props.userName}</h2>
        </div>

        <div className='review-item-userRating'>
        <h1 className="review-props">Rating</h1>
        <div style={ props.userRating>7 ? { backgroundColor:"rgba(91, 221, 70, 1)"} : {backgroundColor:"rgba(255, 235, 52, 1)"}} className='review-item-userRating-circle' >
        <h2>{props.userRating}</h2>
        </div>
        </div>
      </div>
  );
};

export default ReviewItem;
