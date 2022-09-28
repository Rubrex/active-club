import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./MainComponent.css";
const MainComponent = () => {
  return (
    <section className="main-component">
      <div className="cards-section">
        <div className="cards-section-title">
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "orange", fontSize: "30px", marginRight: "10px" }}
          />{" "}
          <h2>Vai vai Coaching Center</h2>
        </div>
        <p>Select today's subjects</p>
        {/* Subjects Sections */}
        <div></div>
      </div>
      <div className="sidebar-section">World</div>
    </section>
  );
};

export default MainComponent;
