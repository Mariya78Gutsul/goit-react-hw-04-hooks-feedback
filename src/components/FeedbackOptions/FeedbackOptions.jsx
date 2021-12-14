import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        id="good"
        className={s.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        id="neutral"
        className={s.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>

      <button
        className={s.btn}
        id="bad"
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
