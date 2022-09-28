import React from "react";
import "./Subject.css";
const Subject = (props) => {
  const { subject, image, desc, time, cls } = props.subject;
  return (
    <div className="subject-container">
      <img src={image} alt={subject} />
      <p className="sub-name">{subject}</p>
      <p className="sub-desc">{desc}</p>
      <p className="sub-class">Class: {cls}</p>
      <p className="sub-time">Time Required: {time}h</p>
      <button className="btn-add-to-list">Add to list</button>
    </div>
  );
};

export default Subject;
