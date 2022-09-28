import React from "react";
import QuestionAnswered from "./QuestionAnswered/QuestionAnswered";
import "./FrequentlyAsked.css";
const FrequentlyAsked = () => {
  const questions_ans = [
    {
      ques: "How does React work?",
      ans: "React is a javascript Library focused on WEB UI, It works by creating virtual DOM(Document Object Model). When state changes, it compares updated Virtual DOM with older Virtual DOM and applies the changed part to the actual DOM thus it makes Rendering more efficient. React also uses Diff Algorithm for optimizations.",
    },
    {
      ques: "What's the difference between props and state?",
      ans: "State and props are two different things. States are used to store values, It can store primitive, non primitive or functions values alltogether. Whereas Props are used to pass data from one Component to another Component.",
    },
    {
      ques: "What's the purpose of useEffect other than loading data?",
      ans: "useEffect is used to handle 'Side Effects' of a website. It can be used to manually change the DOM, cleanups to avoid memory leak etc.",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Frequently Asked Questions w Answers
      </h1>
      <div className="faq-sections">
        {questions_ans.map((quesAns, index) => (
          <QuestionAnswered key={index} quesAns={quesAns} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
