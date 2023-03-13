import React, { useState } from "react";
import "./ReviewForm.css";
import { useContext } from "react";
import { AuthContext } from "../../services/context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const ReviewForm = (props) => {
  const loginNotify = () => toast("You Need Login to Leave Review!");
  const errorGeneralNotify = () =>
    toast("Please, fill in the blanks with appropriate information!");
  const errorTitleNotify = () => toast("Please, add a Title!");
  const errorRatingNotify = () => toast("Please, add a Rating between 1-10!");
  const errorReviewNotify = () => toast("Please, add a Review text!");

  const { currentUser } = useContext(AuthContext);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredVote, setEnteredVote] = useState("");
  const [enteredReview, setEnteredReview] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const voteChangeHandler = (event) => {
    setEnteredVote(event.target.value);
  };

  const reviewChangeHandler = (event) => {
    setEnteredReview(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentUser == null) {
      loginNotify();
    }
    if (enteredTitle.trim() == "") {
      errorTitleNotify();
    }
    if (
      enteredVote.trim() == "" ||
      parseInt(enteredVote) < 0 ||
      parseInt(enteredVote) > 10
    ) {
      errorRatingNotify();
    }
    if (enteredReview.trim() == "") {
      errorReviewNotify();
    }
    if (
      enteredTitle.trim() !== "" &&
      enteredVote.trim() !== "" &&
      enteredReview.trim() !== "" &&
      currentUser !== null
    ) {
      const reviewData = {
        key: Math.floor(Math.random() * 100),
        reviewMovieTitle: enteredTitle,
        userRating: enteredVote,
        reviewText: enteredReview,
        userName: currentUser.displayName,
      };

      props.onFormSubmit(reviewData);
    } else {
      errorGeneralNotify();
    }

    setEnteredTitle("");
    setEnteredVote("");
    setEnteredReview("");
  };

  return (
    <div className="review-form-div">
      <form onSubmit={submitHandler} className="review-form">
        <div className="review-form-controls">
          <div className="review-form-title-control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="review-form-vote-control">
            <label>Rating</label>
            <input
              type="number"
              min="1"
              step="1"
              max="10"
              value={enteredVote}
              onChange={voteChangeHandler}
            />
          </div>
          <div className="review-form-review-control">
            <label>Review</label>
            <input
              type="text"
              value={enteredReview}
              onChange={reviewChangeHandler}
            />
          </div>
        </div>
        <div className="review-form-buttons">
          <button
            className="review-form-action"
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button className="review-form-action" type="submit">
            {" "}
            Share a review ✏️{" "}
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default ReviewForm;
