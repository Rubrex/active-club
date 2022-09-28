import React from "react";
import QuestionAnswered from "./QuestionAnswered/QuestionAnswered";
import "./FrequentlyAsked.css";
const FrequentlyAsked = () => {
  const questions_ans = [
    {
      ques: "How does React work?",
      ans: "dfgdfg sdf ggfhgfh dgfh dfg hdgf hfdg hdgf hdgf hdf ghd gfh dfg hdgf hdgf hdfs g sdfg sdf",
    },
    {
      ques: "What's the difference between props and state?",
      ans: "dfgdfg sdf ggfhgfh dgfh dfg hdgf hfdg hdgf hdgf hdf ghd gfh dfg hdgf hdgf hdfs g sdfg sdf",
    },
    {
      ques: "What's the purpose of useEffect other than loading data?",
      ans: "dfgdfg sdf ggfhgfh dgfh dfg hdgf hfdg hdgf hdgf hdf ghd gfh dfg hdgf hdgf hdfs g sdfg sdf",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Frequently Asked Questions w Answers
      </h1>
      <div className="faq-sections">
        {questions_ans.map((quesAns) => (
          <QuestionAnswered quesAns={quesAns} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
