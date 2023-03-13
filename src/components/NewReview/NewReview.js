import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import "./NewReview.css";
import toast, { Toaster } from "react-hot-toast";

const NewReview = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const reviewSuccessNotify = () => toast("You Succesfully Leaved a Review");

  const reviewDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onReviewSubmit(expenseData);
    setIsEditing(false);
    reviewSuccessNotify();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-review">
      {!isEditing && (
        <button
          className="share-review-btn-closed"
          onClick={startEditingHandler}
        >
          Share a review ✏️
        </button>
      )}
      {isEditing && (
        <ReviewForm
          onFormSubmit={reviewDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default NewReview;
