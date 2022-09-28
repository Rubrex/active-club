import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./MainComponent.css";
import Subject from "../Subject/Subject";
import Sidebar from "../Sidebar/Sidebar";
const MainComponent = () => {
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
        <div className="">
          <Subject />
        </div>
      </main>
      <div className="sidebar-section">
        <Sidebar />
      </div>
    </section>
  );
};

export default MainComponent;
