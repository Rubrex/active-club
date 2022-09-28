import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./MainComponent.css";
import Subject from "./Subject/Subject";
import Sidebar from "./Sidebar/Sidebar";
const MainComponent = () => {
  // states
  const [subjects, setSubjects] = useState([]);
  const [requiredTime, setRequiredTime] = useState(0);
  // handlers function
  const handleAddToList = (time) => {
    const totalTime = requiredTime + parseFloat(time);
    setRequiredTime(totalTime);
  };
  // Side Effects
  useEffect(() => {
    fetch("subjects-data.json")
      .then((response) => response.json())
      .then((data) => setSubjects(data));
  }, []);

  //   JSX
  return (
    <section className="main-component">
      <main className="cards-section">
        <div className="cards-section-title">
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "orange", fontSize: "30px", marginRight: "10px" }}
          />{" "}
          <h2>ORTHODOX-COACHING-CENTRE</h2>
        </div>
        <p>Select today's subjects</p>
        {/* Subjects Sections */}
        <div className="subjects-container">
          {subjects.map((subject) => (
            <Subject
              key={subject.id}
              subject={subject}
              handleAddToList={handleAddToList}
            />
          ))}
        </div>
      </main>
      <div className="sidebar-section">
        <Sidebar requiredTime={requiredTime} />
      </div>
    </section>
  );
};

export default MainComponent;
