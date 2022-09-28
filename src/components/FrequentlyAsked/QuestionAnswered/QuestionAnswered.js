import React from "react";
import "./QuestionAnswered.css";
const QuestionAnswered = (props) => {
  const { ques, ans } = props.quesAns;
  return (
    <div className="question-container">
      <h2>{ques}</h2>
      <p>{ans}</p>
    </div>
  );
};

export default QuestionAnswered;
